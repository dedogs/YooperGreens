using System;
using System.Collections.Generic;
using System.Text;

namespace YooperGreensApp.Core.DomainService
{
    public interface IRepository<T, K>
    {
        //Create Data
        T Create(T item);

        //Read Data
        T FindById(K id);
        IEnumerable<T> ReadAll(IFilterData filter = null);

        //Update Data
        T Update(T item);

        //Delete Data
        T Delete(T item);
        int Count();
    }
}
