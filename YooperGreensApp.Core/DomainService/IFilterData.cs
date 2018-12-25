using System;
using System.Collections.Generic;
using System.Text;

namespace YooperGreensApp.Core.DomainService
{
    public interface IFilterData
    {
        int CurrentPage { get; set; }
        int ItemsPerPage { get; set; }
    }
}
