<link rel="stylesheet" href="asset/style-posts.css">

<h2 style="text-align: center; color:  #8ab4f8; margin-bottom:3%;">Redis</h2>

#### 1. What is Redis?

> Redis is an **in-memory key-value store**.
> I mainly use it to cache data so the system is faster and reduces database load.

Why **fast**:

> Because Redis stores data in memory, not on disk.

#### 2. Why do we use Redis?

> 3 reasons only (easy to remember):

    - Faster response

    - Reduce database queries

    - Support TTL (auto expiration)

#### 3. Common Redis Usage

##### 1. Cache

> Most important one.

> When a request comes, I first check Redis. If data esists, I return it. If not, I query the database, store the result in Redis, then return it.

> => Cache- aside pattern

##### 2. Session storage

> Redis is used to store login sessions so multiple backend servers can share the same session data.

##### 3. Rate limiting

> Redis can limit requests because it supports atomic operations.

#### 4. Redis data types

| Type   | Example             |
| ------ | ------------------- |
| String | token, simple cache |
| Hash   | user information    |
<!-- | List   | simple queue        | -->

#### 5. TTL

What is TTL?

> TTL means time-to-live. After a certain time, Redis automatically deletes the key.

Why important:

> to avoid outdated cache data.

#### 6. Redis vs Database

> Redis is not a replacement for a database. It is used together with a databases to improve performance.

#### 7. Does Redis store data permanently?

> Redis is mainly in-memory, but it can persist data using RDB or AOF.

#### 8. Is Redis thread-safe?

> Yes. Redis commands are atomic because Redis is single-threaded.

#### 9. If Redis is in memory, why doesn't it lose data?

> Because it can persist data to disk using RDB or AOF.

#### 10. Is Redis just a cache?

> Not only. It can be used as cache, message broker, session store, leaderboard, etc.

