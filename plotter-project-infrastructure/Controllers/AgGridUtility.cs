using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System;

namespace plotter_project_infrastructure.Controllers
{
    public static class AgGridUtility
    {
        public static IEnumerable<T> AddSort<T>(IEnumerable<T> collection, string sort)
        {
            // if we don't have a sort, just return the collection as it is
            if (string.IsNullOrWhiteSpace(sort))
            {
                return collection;
            }

            // get ready to start adding sort criteria to the return collection
            var returnCollection = collection;

            // parse the sort
            var arr = JArray.Parse(sort);

            var isFirst = true;
            IOrderedEnumerable<T> sortedCollection = null;

            for (int ii = 0; ii < arr.Count; ii++)
            {
                var colId = (string)arr[ii]["colId"];
                var sortDir = (string)arr[ii]["sort"];

                if (sortDir == "asc")
                {
                    if (isFirst)
                    {
                        sortedCollection = returnCollection.OrderBy(item => typeof(T).GetProperty(CapitalizeFirstLetter(colId)).GetValue(item));
                    }
                    else
                    {
                        sortedCollection = sortedCollection.ThenBy(item => typeof(T).GetProperty(CapitalizeFirstLetter(colId)).GetValue(item));
                    }
                }
                else
                {
                    if (isFirst)
                    {
                        sortedCollection = returnCollection.OrderByDescending(item => typeof(T).GetProperty(CapitalizeFirstLetter(colId)).GetValue(item));
                    }
                    else
                    {
                        sortedCollection = sortedCollection.ThenByDescending(item => typeof(T).GetProperty(CapitalizeFirstLetter(colId)).GetValue(item));
                    }
                }
            }

            return sortedCollection;
        }

        public static IEnumerable<T> AddFilter<T>(IEnumerable<T> collection, string filter)
        {
            // if we don't have a filter, just return the collection as is
            if (string.IsNullOrWhiteSpace(filter))
            {
                return collection;
            }

            // get ready to start adding filter criteria to the return collection
            var returnCollection = collection;

            // parse the filter, adding matching where clause items to the collection
            var obj = JObject.Parse(filter);

            obj.Properties().ToList().ForEach((JProperty jprop) =>
            {
                var prop = obj[jprop.Name];

                switch (prop.Type)
                {
                    // the user has checked some number of items in the ag-grid filter (licensed grid only)
                    case JTokenType.Array:
                        #region array
                        var arr = (JArray)prop;
                        var strings = new List<string>();
                        for (int ii = 0; ii < arr.Count; ii++)
                        {
                            switch (arr[ii].Type)
                            {
                                case JTokenType.String:
                                    strings.Add((string)arr[ii]);
                                    break;

                                case JTokenType.None:
                                case JTokenType.Object:
                                case JTokenType.Array:
                                case JTokenType.Constructor:
                                case JTokenType.Property:
                                case JTokenType.Comment:
                                case JTokenType.Integer:
                                case JTokenType.Float:
                                case JTokenType.Boolean:
                                case JTokenType.Null:
                                case JTokenType.Undefined:
                                case JTokenType.Date:
                                case JTokenType.Raw:
                                case JTokenType.Bytes:
                                case JTokenType.Guid:
                                case JTokenType.Uri:
                                case JTokenType.TimeSpan:
                                default:
                                    break;
                            }

                            if (strings.Count > 0)
                            {
                                returnCollection = returnCollection
                                    .Where<T>(item =>
                                    {
                                        var s = (string)typeof(T).GetProperty(jprop.Name).GetValue(item);
                                        return strings.Contains(s);
                                    });
                            }
                        }
                        #endregion
                        break;

                    case JTokenType.Object:
                        var type = (string)prop["type"];
                        var filterItem = prop["filter"];
                        var filterItemType = filterItem.GetType().ToString();
                        var myProp = CapitalizeFirstLetter(jprop.Name);

                        switch (type)
                        {
                            // number
                            case "lessThan":
                                switch (filterItem.Type)
                                {
                                    case JTokenType.String:
                                        returnCollection = returnCollection.Where((item) =>
                                            String.Compare((string)typeof(T).GetProperty("myProp").GetValue(item), (string)filterItem) < 0);
                                        break;
                                    case JTokenType.Float:
                                        returnCollection = returnCollection.Where((item) =>
                                            (double)typeof(T).GetProperty("myProp").GetValue(item) < (double)filterItem);
                                        break;
                                    case JTokenType.Date:
                                        returnCollection = returnCollection.Where((item) =>
                                            (DateTime)typeof(T).GetProperty("myProp").GetValue(item) < (DateTime)filterItem);
                                        break;

                                    default:
                                        // todo: log unhandled type
                                        break;
                                }
                                break;

                            case "lessThanOrEqual":
                                switch (filterItemType)
                                {
                                    case "System.String":
                                        returnCollection = returnCollection.Where((item) =>
                                            String.Compare((string)typeof(T).GetProperty("myProp").GetValue(item), (string)filterItem) <= 0);
                                        break;
                                    case "System.Double":
                                        returnCollection = returnCollection.Where((item) =>
                                            (double)typeof(T).GetProperty("myProp").GetValue(item) <= (double)filterItem);
                                        break;
                                    case "System.DateTime":
                                        returnCollection = returnCollection.Where((item) =>
                                            (DateTime)typeof(T).GetProperty("myProp").GetValue(item) <= (DateTime)filterItem);
                                        break;

                                    default:
                                        // todo: log unhandled type
                                        break;
                                }
                                break;

                            case "greaterThan":
                                switch (filterItemType)
                                {
                                    case "System.String":
                                        returnCollection = returnCollection.Where((item) =>
                                            String.Compare((string)typeof(T).GetProperty("myProp").GetValue(item), (string)filterItem) > 0);
                                        break;
                                    case "System.Double":
                                        returnCollection = returnCollection.Where((item) =>
                                            (double)typeof(T).GetProperty("myProp").GetValue(item) > (double)filterItem);
                                        break;
                                    case "System.DateTime":
                                        returnCollection = returnCollection.Where((item) =>
                                            (DateTime)typeof(T).GetProperty("myProp").GetValue(item) > (DateTime)filterItem);
                                        break;

                                    default:
                                        // todo: log unhandled type
                                        break;
                                }
                                break;

                            case "greaterThanOrEqual":
                                switch (filterItemType)
                                {
                                    case "System.String":
                                        returnCollection = returnCollection.Where((item) =>
                                            String.Compare((string)typeof(T).GetProperty("myProp").GetValue(item), (string)filterItem) >= 0);
                                        break;
                                    case "System.Double":
                                        returnCollection = returnCollection.Where((item) =>
                                            (double)typeof(T).GetProperty("myProp").GetValue(item) >= (double)filterItem);
                                        break;
                                    case "System.DateTime":
                                        returnCollection = returnCollection.Where((item) =>
                                            (DateTime)typeof(T).GetProperty("myProp").GetValue(item) >= (DateTime)filterItem);
                                        break;

                                    default:
                                        // todo: log unhandled type
                                        break;
                                }
                                break;

                            // string or number
                            case "equals":
                                switch (filterItemType)
                                {
                                    case "System.String":
                                        returnCollection = returnCollection.Where((item) =>
                                            String.Compare((string)typeof(T).GetProperty("myProp").GetValue(item), (string)filterItem) == 0);
                                        break;
                                    case "System.Double":
                                        returnCollection = returnCollection.Where((item) =>
                                            (double)typeof(T).GetProperty("myProp").GetValue(item) == (double)filterItem);
                                        break;
                                    case "System.DateTime":
                                        returnCollection = returnCollection.Where((item) =>
                                            (DateTime)typeof(T).GetProperty("myProp").GetValue(item) == (DateTime)filterItem);
                                        break;

                                    default:
                                        // todo: log unhandled type
                                        break;
                                }
                                break;

                            case "notEqual":
                                switch (filterItemType)
                                {
                                    case "System.String":
                                        returnCollection = returnCollection.Where((item) =>
                                            String.Compare((string)typeof(T).GetProperty("myProp").GetValue(item), (string)filterItem) != 0);
                                        break;
                                    case "System.Double":
                                        returnCollection = returnCollection.Where((item) =>
                                            (double)typeof(T).GetProperty("myProp").GetValue(item) != (double)filterItem);
                                        break;
                                    case "System.DateTime":
                                        returnCollection = returnCollection.Where((item) =>
                                            (DateTime)typeof(T).GetProperty("myProp").GetValue(item) != (DateTime)filterItem);
                                        break;

                                    default:
                                        // todo: log unhandled type
                                        break;
                                }
                                break;

                            // string only
                            case "contains":
                                returnCollection = returnCollection.Where((item) =>
                                    ((string)typeof(T).GetProperty("myProp").GetValue(item)).Contains((string)filterItem));
                                break;

                            case "startsWith":
                                returnCollection = returnCollection.Where((item) =>
                                    ((string)typeof(T).GetProperty("myProp").GetValue(item)).StartsWith((string)filterItem));
                                break;

                            case "endsWith":
                                returnCollection = returnCollection.Where((item) =>
                                    ((string)typeof(T).GetProperty("myProp").GetValue(item)).EndsWith((string)filterItem));
                                break;
                        }
                        break;

                    case JTokenType.Constructor:
                    case JTokenType.Property:
                    case JTokenType.Comment:
                    case JTokenType.Integer:
                    case JTokenType.Float:
                    case JTokenType.Boolean:
                    case JTokenType.Null:
                    case JTokenType.Undefined:
                    case JTokenType.Date:
                    case JTokenType.Raw:
                    case JTokenType.Bytes:
                    case JTokenType.Guid:
                    case JTokenType.Uri:
                    case JTokenType.TimeSpan:
                    default:
                        break;
                }


            });

            return returnCollection;
        }

        private static string CapitalizeFirstLetter(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return "";
            }

            if (name.Length == 1)
            {
                return $"{Char.ToUpper(name[0])}";
            }

            return $"{Char.ToUpper(name[0])}{name.Substring(1)}";
        }
    }
}
