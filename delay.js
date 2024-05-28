[general]
skip-proxy=192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, *.local, localhost, 127.0.0.1
dns-server=8.8.8.8, 8.8.4.4

[server_local]
# 代理服务器配置（替换为你的代理服务器信息）
shadowsocks=example.com:8388, method=aes-256-gcm, password=yourpassword, tag=Proxy

[filter_local]
# 全局匹配规则
ip-cidr,0.0.0.0/0,script-path=https://example.com/delay.js,tag=GlobalDelay
ip6-cidr,::/0,script-path=https://example.com/delay.js,tag=GlobalDelay

[policy]
# 配置策略组
static=GlobalDelay, Proxy, Direct, tag=GlobalDelay

[rewrite_local]
# 重写规则，匹配所有请求并应用延迟脚本
^http:\/\/.*$ url script-response-body https://example.com/delay.js
^https:\/\/.*$ url script-response-body https://example.com/delay.js
