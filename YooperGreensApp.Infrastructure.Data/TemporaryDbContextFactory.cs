using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace YooperGreensApp.Infrastructure.Data
{
    public class TemporaryDbContextFactory : IDesignTimeDbContextFactory<YooperGreensDbContext>
    {
        public YooperGreensDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<YooperGreensDbContext>();
            return new YooperGreensDbContext(builder.Options);
        }
    }
}
