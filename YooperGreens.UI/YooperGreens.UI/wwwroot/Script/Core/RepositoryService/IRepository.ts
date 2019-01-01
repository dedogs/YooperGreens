module GScope {
    export module RepositoryService {
        export interface IRepository<T, K> {
            Create(item: T): T;
            FindById(id: K): T;
            ReadAll(): T[];
            Update(item: T): T;
            Delete(item: T): T;
            Count(): number;
        }
    }
}