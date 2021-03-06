﻿using System;
using System.Collections.Generic;
using System.Text;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Core.DomainService
{
    public interface ISeedRepository : IRepository<Seed, Guid>
    {
        Seed FindByIdInclude(Guid seedId);
    }
}
