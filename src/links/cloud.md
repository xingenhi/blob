---
title: 分布式&微服务
date: 2023/7/5
---

## 解决方案

### Spring Cloud Netflix

> 为开发者提供了在分布式系统（配置管理，服务发现，熔断，路由，微代理，控制总线，一次性 Token，全局锁，Leader 选举，分布式 Session，集群状态）中快速构建的工具，使用 Spring Cloud 的开发者可以快速的启动服务或构建应用、同时能够快速和云平台资源进行对接。<br>
> [SpringCloud中文手册](https://www.springcloud.cc/spring-cloud-greenwich.html)<br>
> [个人文档](http://xingenhi.gitee.io/blog/docs/micro_service/SpringCloudNetflix/SpringCloudNetflix.html)<br>

#### 组件
`Eureka` 注册中心，服务注册、发现等<br>
`Ribbon` 负载均衡，多服务时做负载<br>
`Feign` 服务间内部调用<br>
`Hystrix` 熔断器，服务熔断、降级<br>
`Zuul` 服务网关，所有外部请求经过网关进行过滤转发(路由+过滤+转发)<br>

### Spring Cloud Alibaba

> 它是由一些阿里巴巴的开源组件和云产品组成的。这个项目的目的是为了让大家所熟知的 Spring 框架，其优秀的设计模式和抽象理念，以给使用阿里巴巴产品的 Java 开发者带来使用 Spring Boot 和 Spring Cloud 的更多便利。<br>
> [个人文档](http://xingenhi.gitee.io/blog/docs/micro_service/SpringCloudAlibaba/SpringCloudAlibaba.html)<br>
> [官网](https://spring.io/projects/spring-cloud-alibaba/)<br>

#### 组件
[`Sentinel`](https://sentinelguard.io/zh-cn/docs/introduction.html) 把流量作为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。<br>
[`Nacos`](https://nacos.io/zh-cn/docs/what-is-nacos.html) 一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。<br>
[`RocketMQ`](https://rocketmq.apache.org/zh/) 一款开源的分布式消息系统，基于高可用分布式集群技术，提供低延时的、高可靠的消息发布与订阅服务。<br>
[`Seata`](http://seata.io/zh-cn/docs/user/quickstart.html) 是阿里巴巴集团自主研发的分布式事务解决方案，它提供了原子提交、两阶段提交、全局事务等功能，可以帮助应用实现分布式事务的解决方案。<br>
[`Alibaba Cloud OSS`](https://www.aliyun.com/product/oss) 阿里云对象存储服务（Object Storage Service，简称 OSS），是阿里云提供的海量、安全、低成本、高可靠的云存储服务。您可以在任何应用、任何时间、任何地点存储和访问任意类型的数据。<br>
[`Alibaba Cloud SchedulerX`](https://www.aliyun.com/aliware/schedulerx) 阿里中间件团队开发的一款分布式任务调度产品，提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。<br>
[`Alibaba Cloud SMS`](https://www.aliyun.com/product/sms) 覆盖全球的短信服务，友好、高效、智能的互联化通讯能力，帮助企业迅速搭建客户触达通道。<br>

### Apache Dubbo Zookeeper

> 是一款高性能、轻量级的开源 Java RPC 分布式服务框架，它提供了三大核心能力：面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注册和发现。她最大的特点是按照分层的方式来架构，使用这种方式可以使各个层之间解耦合（或者最大限度地松耦合）。从服务模型的角度来看，Dubbo 采用的是一种非常简单的模型，要么是提供方提供服务，要么是消费方消费服务，所以基于这一点可以抽象出服务提供方（Provider）和服务消费方（Consumer）两个角色。

[个人文档](http://xingenhi.gitee.io/blog/docs/micro_service/ApacheDubboZookeeper/gaoxingnenJavaRPCkuangjiaDubbo.html)<br>
[Dubbo官网](https://cn.dubbo.apache.org/zh-cn/)<br>
[Dubbo GitHub](https://github.com/apache/incubator-dubbo)<br>

## 分布式组件

### 分布式链路追踪

::: info Skywalking
分布式链路追踪<br>
[官网](https://skywalking.apache.org/zh/)
:::

### 分布式网关

::: info ShenYu网关
这是一个异步的，高性能的，跨语言的，响应式的 API 网关。<br>
[官网](https://shenyu.apache.org/zh/docs/index/)
:::

### 分布式消息中间件

::: info ActiveMQ
Apache ActiveMQ是Apache软件基金会所研发的开放源代码消息中间件；由于ActiveMQ是一个纯Java程序，因此只需要操作系统支持Java虚拟机，ActiveMQ便可执行。<br>
[个人文档](https://xingenhi.gitee.io/blog/docs/distributed_middleware/ActiveMQ.html)
:::

::: info RabbitMQ
RabbitMQ是实现了高级消息队列协议（AMQP）的开源消息代理软件（亦称面向消息的中间件）。RabbitMQ服务器是用Erlang语言编写的，而集群和故障转移是构建在开放电信平台框架上的。所有主要的编程语言均有与代理接口通讯的客户端库。<br>
[个人文档](https://xingenhi.gitee.io/blog/docs/distributed_middleware/RabbitMq.html)
:::

::: info RocketMQ
一款开源的分布式消息系统，基于高可用分布式集群技术，提供低延时的、高可靠的消息发布与订阅服务。<br>
[官网](https://rocketmq.apache.org/zh/)
:::

::: info Kafka
Kafka 是一个分布式的基于发布/订阅模式的消息队列（Message Queue），主要应用于大数据实时处理领域。<br>
[官网](https://kafka.apache.org/)
[个人文档](https://xingenhi.gitee.io/blog/docs/big_data/Kafka.html)
:::

### 分布式文件存储

::: info FastDFS
FastDFS是一个开源的轻量级分布式文件系统，它对文件进行管理，功能包括：文件存储、文件同步、文件访问（文件上传、文件下载）等，解决了大容量存储和负载均衡的问题。<br>
[个人文档](https://xingenhi.gitee.io/blog/docs/distributed_middleware/FastDFS.html)
:::

::: info Minio
适用于AI的高性能对象存储。<br>
MinIO 提供高性能、与S3 兼容的对象存储系统，让你自己能够构建自己的云储存服务。<br>
MinIO原生支持 Kubernetes，它可用于每个独立的公共云、每个 Kubernetes 发行版、私有云和边缘的对象存储套件。<br>
MinIO是软件定义的，不需要购买其他任何硬件，在 GNU AGPL v3 下是 100% 开源的。<br>
[官网](https://www.minio.org.cn/)
:::
