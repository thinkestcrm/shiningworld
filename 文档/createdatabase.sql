CREATE DATABASE IF NOT EXISTS YingTu default character set utf8;

use YingTu;

CREATE TABLE IF NOT EXISTS `yingtu`.`UserLogintbl` ( 
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '记录id' , 
    `userid` CHAR(32) NOT NULL COMMENT '用户登录id' , 
    `password` CHAR(64) NOT NULL COMMENT '登录密码' , 
    `nickname` CHAR(32) NOT NULL COMMENT '昵称' , 
    UNIQUE (`userid`),
    primary key(id)
    ) 
    ENGINE = InnoDB COMMENT = '用户登录表';

CREATE TABLE IF NOT EXISTS `yingtu`.`photographerinfotbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '外键，引用用户登录表' , 
    `name` CHAR(32) NOT NULL COMMENT '真实中文姓名' , 
    `messagecount` INT UNSIGNED NOT NULL COMMENT '系统的通知消息数，用trigger实现' , 
    `mobilephone` CHAR(16) NOT NULL COMMENT '移动电话' , 
    `selfintroduction` VARCHAR(512) NOT NULL COMMENT '简短的自我介绍' , 
    `address` VARCHAR(128) NOT NULL COMMENT '真实地址' , 
    `age` CHAR(3) NOT NULL COMMENT '年龄' , 
    `tag` VARCHAR(32) NOT NULL COMMENT '标签',
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '未认证摄影师详细信息表';

CREATE TABLE IF NOT EXISTS `yingtu`.`tagtbl` ( 
    `id` INT NOT NULL AUTO_INCREMENT, 
    `category1` CHAR(8) NULL COMMENT '标签分类大类' , 
    `category2` CHAR(8) NULL COMMENT '标签分类小类' , 
    `tagname` CHAR(8) NOT NULL COMMENT '标签名',
    PRIMARY KEY(id)
    )
    ENGINE = InnoDB COMMENT = '标签表';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`CertedPhotoGrapherInfotbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '外键' , 
    `name` CHAR(32) NOT NULL COMMENT '真实姓名' , 
    `messagecount` INT NOT NULL DEFAULT '0' COMMENT '系统消息数' , 
    `grade` ENUM('小影','中影','大影','影徒') NOT NULL COMMENT '级别' , 
    `mobilephone` CHAR(16) NOT NULL COMMENT '移动电话' , 
    `selfintroduction` VARCHAR(256) NOT NULL COMMENT '自我介绍' , 
    `address` VARCHAR(128) NOT NULL COMMENT '地址' , 
    `age` CHAR(3) NOT NULL COMMENT '年龄' , 
    `tagname` VARCHAR(128) NOT NULL COMMENT '标签' , 
    `certstatus` ENUM('未通过','通过','审核中') NOT NULL COMMENT '审核状态' , 
    `weixin` CHAR(32) NOT NULL COMMENT '微信号' , 
    `headpic` BIGINT NOT NULL COMMENT '头像照片id' , 
    `payname` VARCHAR(32) NOT NULL COMMENT '支付宝名' , 
    `payid` VARCHAR(32) NOT NULL COMMENT '支付宝账号' , 
    `snpic` BIGINT NOT NULL COMMENT '序列号照片id' , 
    `sn` CHAR(64) NOT NULL COMMENT '序列号' , 
    `cardpic` BIGINT NOT NULL COMMENT '身份证照片id' , 
    `cardno` CHAR(64) NOT NULL COMMENT '身份证号',
    primary key(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '认证摄影师信息表';    

CREATE TABLE IF NOT EXISTS `yingtu`.`CertifyPictbl` ( 
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '图片id' , 
    `picture` BLOB NOT NULL COMMENT '图片二进制数据' , 
    `uploadtime` TIMESTAMP NOT NULL COMMENT '图片上传时间',
    primary key(id)
    )
    ENGINE = InnoDB COMMENT = '认证图标表';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`CustomerInfotbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '外键' , 
    `name` CHAR(32) NOT NULL COMMENT '真实姓名' , 
    `mobilephone` CHAR(32) NOT NULL COMMENT '移动电话' , 
    `address` VARCHAR(128) NOT NULL COMMENT '地址' , 
    `headpic` BIGINT NOT NULL COMMENT '头像id' , 
    `selfintro` VARCHAR(128) NOT NULL COMMENT '自我介绍' , 
    `gender` VARCHAR(2) NOT NULL COMMENT '性别' ,
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '顾客信息表';  

CREATE TABLE IF NOT EXISTS `yingtu`.`SystemMessagetbl` ( 
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '记录id' , 
    `userid` CHAR(20) NOT NULL COMMENT '用户登录id' , 
    `readingstatus` ENUM('未读','已读') NOT NULL COMMENT '阅读状态' , 
    `content` VARCHAR(500) NOT NULL COMMENT '消息内容' , 
    `grade` ENUM('提示','订单') NOT NULL COMMENT '保留级别。决定阅读后消息的保留时间',
    PRIMARY KEY(id),
    INDEX(userid)
    )
    ENGINE = InnoDB COMMENT = '系统消息表';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`CustomerDealInfoDigesttbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '外键' , 
    `unpaidcount` INT NOT NULL COMMENT '待付费数' , 
    `untakecount` INT NOT NULL COMMENT '待拍摄数' , 
    `unsaycount` INT NOT NULL COMMENT '待评价数' , 
    `shoppingcartcount` INT NOT NULL COMMENT '购物车数' , 
    `toolcount` INT NOT NULL COMMENT '待使用道具数' , 
    `ordercount` INT NOT NULL COMMENT '订单数',
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '顾客交易信息表';    

CREATE TABLE IF NOT EXISTS `yingtu`.`CustomerRequirementtbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '外键' , 
    `content` VARCHAR(500) NOT NULL COMMENT '需求内容' , 
    `time` TIMESTAMP NOT NULL COMMENT '时间' , 
    `location` VARCHAR(200) NOT NULL COMMENT '地点' , 
    `contact` VARCHAR(100) NOT NULL COMMENT '联系方式' , 
    `status` ENUM('已接单','未接单') NOT NULL COMMENT '状态',
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '客户发布需求表';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`ProductBaseInfotbl` ( 
    `productid` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '记录id' , 
    `name` CHAR(64) NOT NULL COMMENT '产品名称' , 
    `category` ENUM('摄影','配套产品','化妆师') NOT NULL COMMENT '产品种类' , 
    `productpic` CHAR(100) NOT NULL COMMENT '产品图片id' , 
    `city` CHAR(10) NOT NULL COMMENT '所在城市' , 
    `providerid` BIGINT UNSIGNED NOT NULL COMMENT '外键',
    PRIMARY KEY(productid),
    CONSTRAINT FOREIGN KEY(providerid) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '产品基本信息表';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`ProductPictbl` ( 
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '记录id' , 
    `pic` BLOB NOT NULL COMMENT '图片数据' , 
    `category` INT NOT NULL COMMENT '种类' , 
    `uploadtime` TIMESTAMP NOT NULL COMMENT '上传时间',
    PRIMARY KEY(id)
    ) 
    ENGINE = InnoDB COMMENT = '产品图片表';    

CREATE TABLE IF NOT EXISTS `yingtu`.`PhotographerProducttbl` ( 
    `id` BIGINT UNSIGNED NOT NULL , 
    `introduction` VARCHAR(200) NOT NULL , 
    `category` TEXT NOT NULL , 
    `personcount` INT NOT NULL , 
    `time` INT NOT NULL , 
    `takecount` INT NOT NULL , 
    `price` INT NOT NULL , 
    `validtime` DATETIME NOT NULL , 
    `takemode` ENUM('上门拍摄') NOT NULL , 
    `withdevice` ENUM('yes','no') NOT NULL , 
    `devicecontent` CHAR(50) NOT NULL , 
    `checkstatus` ENUM('审核中','通过','未通过') NOT NULL , 
    `sellstatus` ENUM('上架','下架','草稿') NOT NULL , 
    `monthdealcount` TINYINT NOT NULL , 
    `likedcount` INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES ProductBaseInfotbl(productid)
    ) ENGINE = InnoDB;
    
CREATE TABLE  IF NOT EXISTS `yingtu`.`PhotographerProductCategorytbl` ( 
    `id` INT NOT NULL AUTO_INCREMENT COMMENT '记录id' , 
    `name` CHAR(20) NOT NULL COMMENT '分类名' , 
    `c1` CHAR(10) NOT NULL COMMENT '一级分类名' , 
    `c2` CHAR(10) NOT NULL COMMENT '二级分类名' ,
    PRIMARY KEY(id)
    ) 
    ENGINE = InnoDB COMMENT = '摄影产品分类表';    

CREATE TABLE IF NOT EXISTS `yingtu`.PhotographerProductCountFormulatbl ( 
    `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '记录id' , 
    `personcount` INT NOT NULL COMMENT '拍摄人数' , 
    `timelength` INT NOT NULL COMMENT '拍摄时长' , 
    `countresult` VARCHAR(20) NOT NULL COMMENT '张数.{b:40,m:75}',
    PRIMARY KEY(id)
    ) ENGINE = InnoDB COMMENT = '摄影产品张数对应表';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`PhotographerProductPriceFormulatbl` ( 
    `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '记录id' , 
    `personcount` INT NOT NULL COMMENT '拍摄人数' , 
    `grade` INT NOT NULL COMMENT '摄影师级别' , 
    `priceresult` INT(100) NOT NULL COMMENT '最终价格',
    PRIMARY KEY(id)
    ) ENGINE = InnoDB COMMENT = '摄影师产品价格计算表';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`DeviceContenttbl` ( 
    `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT, 
    `name` CHAR(10) NOT NULL , 
    `price` INT NOT NULL,
    PRIMARY KEY(id)
    ) 
    ENGINE = InnoDB COMMENT = '设备表';    

CREATE TABLE IF NOT EXISTS `yingtu`.`ProductAccessorytbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '记录id', 
    `category` ENUM('场景','道具','化妆师') NOT NULL COMMENT '配套产品种类', 
    `name` VARCHAR(20) NOT NULL COMMENT '配套产品名', 
    `description` VARCHAR(256) NOT NULL COMMENT '产品描述', 
    `price` INT NOT NULL COMMENT '产品价格', 
    `picid` VARCHAR(100) NOT NULL COMMENT '产品图片id', 
    `taketime` TIMESTAMP NOT NULL COMMENT '产品拍摄时间', 
    `personcount` INT NOT NULL COMMENT '产品拍摄时间', 
    `validtime` INT NOT NULL COMMENT '有效时间', 
    `contact` VARCHAR(256) NOT NULL COMMENT '联系方式', 
    `location` VARCHAR(256) NOT NULL COMMENT '地点', 
    `route` VARCHAR(256) NOT NULL COMMENT '交通推荐', 
    `selected` ENUM('yes','no') NOT NULL COMMENT '是否选中',
    primary key(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES ProductBaseInfotbl(productid)
    ) 
    ENGINE = InnoDB COMMENT = '配套产品表';

CREATE TABLE IF NOT EXISTS `yingtu`.`ShoppCharttbl` ( 
    `userno` BIGINT UNSIGNED NOT NULL COMMENT '用户id号。外键', 
    `productno` BIGINT UNSIGNED NOT NULL COMMENT '产品id号。外键', 
    `amount` INT NOT NULL COMMENT '产品数量', 
    `addtime` TIMESTAMP NOT NULL COMMENT '产品加入时间', 
    `status` ENUM('未购买','已购买') NOT NULL COMMENT '产品状态', 
    `price` INT NOT NULL COMMENT '价格总计',
    primary key(userno),
    CONSTRAINT FOREIGN KEY(userno) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '购物车表';

CREATE TABLE IF NOT EXISTS `yingtu`.`OrderSheettbl` ( 
    `id` BIGINT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '记录号', 
    `productcategory` ENUM('摄影','配套产品') NOT NULL COMMENT '产品种类', 
    `productcount` INT NOT NULL COMMENT '产品个数', 
    `customername` CHAR(20) NOT NULL COMMENT '顾客姓名', 
    `userno` BIGINT UNSIGNED NOT NULL COMMENT '用户no。外键', 
    `contact` VARCHAR(256) NOT NULL COMMENT '联系方式', 
    `address` VARCHAR(256) NOT NULL COMMENT '地址', 
    `city` VARCHAR(20) NOT NULL COMMENT '城市', 
    `esheet` VARCHAR(256) NOT NULL COMMENT '电子兑换券', 
    `createtime` TIMESTAMP NOT NULL COMMENT '订单创建时间', 
    `status` ENUM('已付款','等待付款') NOT NULL COMMENT '订单状态',
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(userno) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '订单表';

CREATE TABLE IF NOT EXISTS `yingtu`.`eSheettbl` ( 
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '记录id' , 
    `productno` BIGINT UNSIGNED NOT NULL COMMENT '产品id号', 
    `price` INT UNSIGNED NOT NULL COMMENT '价格' , 
    `sn` CHAR(64) NOT NULL COMMENT '兑换券码' , 
    `validtime` TIMESTAMP NOT NULL COMMENT '有效期' , 
    `endtime` TIMESTAMP NOT NULL COMMENT '截止日期' , 
    `content` VARCHAR(256) NOT NULL COMMENT '内容' , 
    `dealid` BIGINT UNSIGNED NOT NULL COMMENT '订单号' , 
    `contactperson` CHAR(20) NOT NULL COMMENT '联系人' , 
    `contacmode` VARCHAR(256) NOT NULL COMMENT '交易方式' , 
    `address` VARCHAR(256) NOT NULL COMMENT '地址' , 
    `star` ENUM('1star','2star','3star','4star','5star') NOT NULL COMMENT '评价星级' , 
    `status` ENUM('有效','已使用','过期','退款中','待使用','满意') NOT NULL COMMENT '兑换券状态',
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(dealid) REFERENCES OrderSheettbl(id),
    CONSTRAINT FOREIGN KEY(productno) REFERENCES ProductBaseInfotbl(productid)
    ) 
    ENGINE = InnoDB COMMENT = '电子兑换券表';

INSERT INTO `userlogintbl` (`id`, `userid`, `password`, `nickname`) VALUES (NULL, 'quest', '111111', 'thinkest fly');
INSERT INTO `userlogintbl` (`id`, `userid`, `password`, `nickname`) VALUES (NULL, 'lihill', '222222', 'li hill');

    
INSERT INTO `photographerproductcategorytbl` (`name`, `c1`, `c2`) VALUES ('个人写真', '人像', '写真');
INSERT INTO `photographerproductcategorytbl` (`name`, `c1`, `c2`) VALUES ('儿童摄影', '人像', '写真');
INSERT INTO `photographerproductcategorytbl` (`name`, `c1`, `c2`) VALUES ('麻辣川菜', '美食', '');
    
INSERT INTO `tagtbl` (`id`, `category1`, `category2`, `tagname`) VALUES (NULL, NULL, NULL, '美食');
INSERT INTO `tagtbl` (`id`, `category1`, `category2`, `tagname`) VALUES (NULL, NULL, NULL, '写真');
INSERT INTO `tagtbl` (`id`, `category1`, `category2`, `tagname`) VALUES (NULL, NULL, NULL, '儿童');
INSERT INTO `tagtbl` (`id`, `category1`, `category2`, `tagname`) VALUES (NULL, NULL, NULL, '摄影');    