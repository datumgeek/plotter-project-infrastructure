using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System;

namespace plotter_project_infrastructure.Controllers
{
    public static class AgGridUtility
    {
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
                        var myProp = CapitalizeFirstLetter(jprop.Name);

                        switch (type)
                        {

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

            returnCollection = returnCollection
                .Where<T>((item) => 
                {
                    return (double)typeof(T).GetProperty("myprop").GetValue(item) == 45.37;
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
