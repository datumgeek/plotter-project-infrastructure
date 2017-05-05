﻿using System;

namespace plotter_project_infrastructure.StatsDomain
{
    public class SupplierStats
    {
        public Guid SupplierStatsId { get; set; }
        public string SupplierName { get; set; }
        public int ProductCount { get; set; }
        public string Notes { get; set; }
        public DateTime SomeDateProp { get; set; }
    }
}
