using System;
using System.Collections.Generic;
using System.Text;
using YooperGreensApp.Core.DomainService;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Infrastructure.Data.Repositories
{
    public class SeedRepository : ISeedRepository
    {
        public int Count()
        {
            throw new NotImplementedException();
        }

        public Seed Create(Seed item)
        {
            throw new NotImplementedException();
        }

        public Seed Delete(Seed item)
        {
            throw new NotImplementedException();
        }

        public Seed FindById(Guid id)
        {
            throw new NotImplementedException();
        }

        public Seed FindByIdInclude(Guid seedId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Seed> ReadAll(IFilterData filter = null)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Seed> ReadAllInclude()
        {
            throw new NotImplementedException();
        }

        public Seed Update(Seed item)
        {
            throw new NotImplementedException();
        }
    }
}
