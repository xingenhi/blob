export default {
    base: '/',
    title: '我的故事',
    description: '我的故事.',
    ignoreDeadLinks: true,
    srcDir: './src',

    themeConfig: {
        // 主题级选项
        logo: 'logo.png',
        search: {
            provider: 'local'
        },
        nav: [
            {text: '导航', link: '/links/common'},
            {text: '文档', link: '/docs/index'},
            {text: '知识库', link: 'https://ik.xingenhi.cn'}
        ],
        sidebar: {
            '/docs/': [
                {text: '前端', link: '/docs/ui/'},
                {
                    text: 'JAVA',
                    items: [
                        {
                            text: '框架',
                            items: [
                                {text: 'SpringMVC', link: '/docs/java_base/framework/SpringMVC'},
                                {text: 'SpringBoot', link: '/docs/java_base/framework/SpringBoot'},
                            ]
                        },
                        {
                            text: '模块详解',
                            items: [
                                {text: 'JDK8新特性', link: '/docs/java_base/module/JDK8新特性'},
                                {text: 'HashMap', link: '/docs/java_base/module/HashMap'},
                                {text: '正则表达式', link: '/docs/java_base/module/正则表达式'},
                            ]
                        }
                    ]
                },
                {
                    text: '数据库',
                    items: [
                        {text: '关系型数据库', link: '/docs/db/Oracle'},
                        {text: '键值数据库', link: '/docs/db/Redis'},
                        {text: '面向文档数据库', link: '/docs/db/MongoDB'},
                        {text: '分布式数据库', link: '/docs/db/Zookeeper'},
                        {text: '时序数据库', link: '/docs/db/InfluxDB'},
                        {
                            text: '框架',
                            items: [
                                {text: 'Mybatis', link: '/docs/db/Mybatis'},
                                {text: 'MybatisPlus', link: '/docs/db/MybatisPlus'},
                                {text: 'MyCat', link: '/docs/db/MyCat'},
                            ]
                        },
                    ]
                },
                {
                    text: '分布式中间件',
                    items: [
                        {text: 'Dubbo', link: '/docs/distributed_middleware/Dubbo'},
                        {text: 'ActiveMQ', link: '/docs/distributed_middleware/ActiveMQ'},
                        {text: 'RabbitMq', link: '/docs/distributed_middleware/RabbitMq'},
                        {text: 'Solr', link: '/docs/distributed_middleware/Solr'},
                        {text: 'FastDFS', link: '/docs/distributed_middleware/FastDFS'},
                    ]
                },
                {
                    text: '微服务',
                    items: [
                        {
                            text: 'Spring Cloud Netflix',
                            items: [
                                {
                                    text: 'SpringCloudNetflix',
                                    link: '/docs/micro_service/SpringCloudNetflix/SpringCloudNetflix'
                                },
                                {
                                    text: 'SpringCloud服务追踪',
                                    link: '/docs/micro_service/SpringCloudNetflix/SpringCloud服务追踪'
                                },
                                {
                                    text: 'SpringBootAdmin服务监控',
                                    link: '/docs/micro_service/SpringCloudNetflix/SpringBootAdmin服务监控'
                                },
                                {
                                    text: 'SpringCloud服务配置',
                                    link: '/docs/micro_service/SpringCloudNetflix/SpringCloud服务配置'
                                }
                            ]
                        },
                        {
                            text: 'Apache Dubbo Zookeeper',
                            items: [
                                {
                                    text: '分布式协调框架Zookeeper',
                                    link: '/docs/micro_service/ApacheDubboZookeeper/分布式协调框架Zookeeper'
                                },
                                {
                                    text: '高性能JavaRPC框架Dubbo',
                                    link: '/docs/micro_service/ApacheDubboZookeeper/高性能JavaRPC框架Dubbo'
                                },
                            ]
                        },
                        {
                            text: 'Spring Cloud Alibaba',
                            items: [
                                {
                                    text: 'SpringCloudAlibaba异步通信',
                                    link: '/docs/micro_service/SpringCloudAlibaba/SpringCloudAlibaba异步通信'
                                },
                                {
                                    text: 'SpringCloudAlibaba',
                                    link: '/docs/micro_service/SpringCloudAlibaba/SpringCloudAlibaba'
                                },
                                {
                                    text: 'SpringCloudAlibaba链路追踪',
                                    link: '/docs/micro_service/SpringCloudAlibaba/SpringCloudAlibaba链路追踪'
                                },
                                {
                                    text: 'SpringCloudAlibaba服务配置',
                                    link: '/docs/micro_service/SpringCloudAlibaba/SpringCloudAlibaba服务配置'
                                }
                            ]
                        },
                    ]
                },
                {
                    text: '大数据',
                    items: [
                        {text: '操作系统', link: '/docs/big_data/Linux'},
                        {
                            text: '组件',
                            items: [
                                {text: 'Flink', link: '/docs/big_data/Flink'},
                                {text: 'Kafka', link: '/docs/big_data/Kafka'},
                            ]
                        }
                    ]
                },
                {
                    text: '运维',
                    items: [
                        {
                            text: '基础环境',
                            items: [
                                {text: 'Cmake', link: '/docs/operations/base_env/Cmake'},
                                {text: 'Git', link: '/docs/operations/base_env/Git'},
                                {text: 'Maven', link: '/docs/operations/base_env/Maven'},
                                {text: 'Nexus', link: '/docs/operations/base_env/Nexus'},
                            ]
                        },
                        {
                            text: 'Linux',
                            items: [
                                {text: 'Java', link: '/docs/operations/linux/Java'},
                                {text: 'Maven', link: '/docs/operations/linux/Maven'},
                                {text: 'Node.js', link: '/docs/operations/linux/Node.js'},
                                {text: 'Go', link: '/docs/operations/linux/Go'},
                                {text: '常用', link: '/docs/operations/linux/common'},
                            ]
                        },
                        {
                            text: '持续集成持续部署',
                            items: [
                                {text: '常用', link: '/docs/operations/ci/common'},
                                {
                                    text: 'CI',
                                    items: [
                                        {text: 'GitLab', link: '/docs/operations/ci/GitLab'},
                                        {text: 'Jenkins', link: '/docs/operations/ci/Jenkins'},
                                    ]
                                },
                                {text: 'K8S', link: '/docs/operations/ci/Kubernetes'},
                                {
                                    text: 'Docker 全家桶',
                                    items: [
                                        {text: 'Docker', link: '/docs/operations/ci/Docker'},
                                        {text: 'Docker Compose', link: '/docs/operations/ci/DockerCompose'},
                                        {text: 'Docker File', link: '/docs/operations/ci/Dockerfile'},
                                        {text: 'Docker Machine', link: '/docs/operations/ci/DockerMachine'},
                                        {text: 'Docker Registry', link: '/docs/operations/ci/DockerRegistry'},
                                        {text: 'Docker Swarm', link: '/docs/operations/ci/Swarm'},
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    text: '其他',
                    items: [
                        {
                            text: '规则引擎',
                            items: [
                                {text: 'Drools', link: '/docs/other/Drools'},
                                {text: 'AviatorScript', link: '/docs/other/AviatorScript'}
                            ]
                        }
                    ]
                }
            ],
            '/links/': [
                {text: '常用', link: '/links/common'},
                {text: '前端', link: '/links/ui'},
                {text: 'JAVA', link: '/links/java'},
                {text: '数据库', link: '/links/db'},
                {text: '微服务', link: '/links/cloud'},
                {text: '大数据', link: '/links/bigdata'},
                {text: '物联网', link: '/links/iot'},
                {text: 'GoLang', link: '/links/go'},
                {text: '运维', link: '/links/operation'},
                {text: '流媒体服务器', link: '/links/stream'},
                {text: '常用社区', link: '/links/community'},
                {text: '环境', link: '/links/env'},
                {text: '仓库', link: '/links/hub'},
                {text: '面试', link: '/links/interview'},
                {text: '其他', link: '/links/other'},
            ]
        }
    }
}
