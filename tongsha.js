[MITM]
hostname =  %APPEND% *play.*.cn,long.*.cn
[Script]
通杀 = type=http-request,pattern=^https:\/\/[^\/]*\..*\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)?,requires-body=0,script-path=https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/tangtoutiao.js,script-update-interval=0