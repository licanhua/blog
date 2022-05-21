---
title: System Design Interview
date: "2022-05-21T10:30:03.284Z"
description: "System Design Interview Preparation"
tags: ["System Design"]

---

## Requirement
1. Post, Delete, Search, Image&Video, Comment, Like
2. CAP (Strong, Weak, or complete consistency, High Availability 99.999
3. Latency 95% returns 2 seconds
4. Read heavy, Write Heavy, and Read/Write ratio
4. Scalability, Security, Monitor, Log, Failover

## Estimation
Storage, request/second

## High Level Design

```mermaid
flowchart TD
    Client([User])
    WebServer[[Web Server]]
    WriteAPIAsync([Write API Async])
    ObjectStore([Object Store])
    WriteAPI([Write API])
    ReadAPI([Read API])
    subgraph DB [Rep-Federation-Shard]
        direction RL
        Master --> Slave
    end

    Client --> CDN
    Client --> LB
    Client --> DNS
    LB --> WebServer
    WebServer --> WriteAPI
    WebServer --> ReadAPI
    ReadAPI --> Cache
    ReadAPI --> Slave
    WriteAPI --> Master
    WebServer --> WriteAPIAsync
    WriteAPIAsync --> Queue
    Queue --> Worker
    Worker --> NoSQL
    Worker --> ObjectStore
    CDN --> ObjectStore
```

## Component Design
### DB Schema
### API

## Bottlenecks
1. Load Balance, Data Sharding, In Memory DB
2. Scale: Vertical/Horizatal, Cache(Application, DB Caching, In Memory), LB, DB rep, DB partition, Map-Reduce
