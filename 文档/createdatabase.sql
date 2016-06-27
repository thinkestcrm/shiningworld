CREATE DATABASE IF NOT EXISTS YingTu default character set utf8;

use YingTu;

CREATE TABLE IF NOT EXISTS `yingtu`.`UserLogintbl` ( 
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '��¼id' , 
    `userid` CHAR(32) NOT NULL COMMENT '�û���¼id' , 
    `password` CHAR(64) NOT NULL COMMENT '��¼����' , 
    `nickname` CHAR(32) NOT NULL COMMENT '�ǳ�' , 
    UNIQUE (`userid`),
    primary key(id)
    ) 
    ENGINE = InnoDB COMMENT = '�û���¼��';

CREATE TABLE IF NOT EXISTS `yingtu`.`photographerinfotbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '����������û���¼��' , 
    `name` CHAR(32) NOT NULL COMMENT '��ʵ��������' , 
    `messagecount` INT UNSIGNED NOT NULL COMMENT 'ϵͳ��֪ͨ��Ϣ������triggerʵ��' , 
    `mobilephone` CHAR(16) NOT NULL COMMENT '�ƶ��绰' , 
    `selfintroduction` VARCHAR(512) NOT NULL COMMENT '��̵����ҽ���' , 
    `address` VARCHAR(128) NOT NULL COMMENT '��ʵ��ַ' , 
    `age` CHAR(3) NOT NULL COMMENT '����' , 
    `tag` VARCHAR(32) NOT NULL COMMENT '��ǩ',
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = 'δ��֤��Ӱʦ��ϸ��Ϣ��';

CREATE TABLE IF NOT EXISTS `yingtu`.`tagtbl` ( 
    `id` INT NOT NULL AUTO_INCREMENT, 
    `category1` CHAR(8) NULL COMMENT '��ǩ�������' , 
    `category2` CHAR(8) NULL COMMENT '��ǩ����С��' , 
    `tagname` CHAR(8) NOT NULL COMMENT '��ǩ��',
    PRIMARY KEY(id)
    )
    ENGINE = InnoDB COMMENT = '��ǩ��';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`CertedPhotoGrapherInfotbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '���' , 
    `name` CHAR(32) NOT NULL COMMENT '��ʵ����' , 
    `messagecount` INT NOT NULL DEFAULT '0' COMMENT 'ϵͳ��Ϣ��' , 
    `grade` ENUM('СӰ','��Ӱ','��Ӱ','Ӱͽ') NOT NULL COMMENT '����' , 
    `mobilephone` CHAR(16) NOT NULL COMMENT '�ƶ��绰' , 
    `selfintroduction` VARCHAR(256) NOT NULL COMMENT '���ҽ���' , 
    `address` VARCHAR(128) NOT NULL COMMENT '��ַ' , 
    `age` CHAR(3) NOT NULL COMMENT '����' , 
    `tagname` VARCHAR(128) NOT NULL COMMENT '��ǩ' , 
    `certstatus` ENUM('δͨ��','ͨ��','�����') NOT NULL COMMENT '���״̬' , 
    `weixin` CHAR(32) NOT NULL COMMENT '΢�ź�' , 
    `headpic` BIGINT NOT NULL COMMENT 'ͷ����Ƭid' , 
    `payname` VARCHAR(32) NOT NULL COMMENT '֧������' , 
    `payid` VARCHAR(32) NOT NULL COMMENT '֧�����˺�' , 
    `snpic` BIGINT NOT NULL COMMENT '���к���Ƭid' , 
    `sn` CHAR(64) NOT NULL COMMENT '���к�' , 
    `cardpic` BIGINT NOT NULL COMMENT '���֤��Ƭid' , 
    `cardno` CHAR(64) NOT NULL COMMENT '���֤��',
    primary key(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '��֤��Ӱʦ��Ϣ��';    

CREATE TABLE IF NOT EXISTS `yingtu`.`CertifyPictbl` ( 
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ͼƬid' , 
    `picture` BLOB NOT NULL COMMENT 'ͼƬ����������' , 
    `uploadtime` TIMESTAMP NOT NULL COMMENT 'ͼƬ�ϴ�ʱ��',
    primary key(id)
    )
    ENGINE = InnoDB COMMENT = '��֤ͼ���';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`CustomerInfotbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '���' , 
    `name` CHAR(32) NOT NULL COMMENT '��ʵ����' , 
    `mobilephone` CHAR(32) NOT NULL COMMENT '�ƶ��绰' , 
    `address` VARCHAR(128) NOT NULL COMMENT '��ַ' , 
    `headpic` BIGINT NOT NULL COMMENT 'ͷ��id' , 
    `selfintro` VARCHAR(128) NOT NULL COMMENT '���ҽ���' , 
    `gender` VARCHAR(2) NOT NULL COMMENT '�Ա�' ,
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '�˿���Ϣ��';  

CREATE TABLE IF NOT EXISTS `yingtu`.`SystemMessagetbl` ( 
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '��¼id' , 
    `userid` CHAR(20) NOT NULL COMMENT '�û���¼id' , 
    `readingstatus` ENUM('δ��','�Ѷ�') NOT NULL COMMENT '�Ķ�״̬' , 
    `content` VARCHAR(500) NOT NULL COMMENT '��Ϣ����' , 
    `grade` ENUM('��ʾ','����') NOT NULL COMMENT '�������𡣾����Ķ�����Ϣ�ı���ʱ��',
    PRIMARY KEY(id),
    INDEX(userid)
    )
    ENGINE = InnoDB COMMENT = 'ϵͳ��Ϣ��';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`CustomerDealInfoDigesttbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '���' , 
    `unpaidcount` INT NOT NULL COMMENT '��������' , 
    `untakecount` INT NOT NULL COMMENT '��������' , 
    `unsaycount` INT NOT NULL COMMENT '��������' , 
    `shoppingcartcount` INT NOT NULL COMMENT '���ﳵ��' , 
    `toolcount` INT NOT NULL COMMENT '��ʹ�õ�����' , 
    `ordercount` INT NOT NULL COMMENT '������',
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '�˿ͽ�����Ϣ��';    

CREATE TABLE IF NOT EXISTS `yingtu`.`CustomerRequirementtbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '���' , 
    `content` VARCHAR(500) NOT NULL COMMENT '��������' , 
    `time` TIMESTAMP NOT NULL COMMENT 'ʱ��' , 
    `location` VARCHAR(200) NOT NULL COMMENT '�ص�' , 
    `contact` VARCHAR(100) NOT NULL COMMENT '��ϵ��ʽ' , 
    `status` ENUM('�ѽӵ�','δ�ӵ�') NOT NULL COMMENT '״̬',
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '�ͻ����������';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`ProductBaseInfotbl` ( 
    `productid` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '��¼id' , 
    `name` CHAR(64) NOT NULL COMMENT '��Ʒ����' , 
    `category` ENUM('��Ӱ','���ײ�Ʒ','��ױʦ') NOT NULL COMMENT '��Ʒ����' , 
    `productpic` CHAR(100) NOT NULL COMMENT '��ƷͼƬid' , 
    `city` CHAR(10) NOT NULL COMMENT '���ڳ���' , 
    `providerid` BIGINT UNSIGNED NOT NULL COMMENT '���',
    PRIMARY KEY(productid),
    CONSTRAINT FOREIGN KEY(providerid) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '��Ʒ������Ϣ��';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`ProductPictbl` ( 
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '��¼id' , 
    `pic` BLOB NOT NULL COMMENT 'ͼƬ����' , 
    `category` INT NOT NULL COMMENT '����' , 
    `uploadtime` TIMESTAMP NOT NULL COMMENT '�ϴ�ʱ��',
    PRIMARY KEY(id)
    ) 
    ENGINE = InnoDB COMMENT = '��ƷͼƬ��';    

CREATE TABLE IF NOT EXISTS `yingtu`.`PhotographerProducttbl` ( 
    `id` BIGINT UNSIGNED NOT NULL , 
    `introduction` VARCHAR(200) NOT NULL , 
    `category` TEXT NOT NULL , 
    `personcount` INT NOT NULL , 
    `time` INT NOT NULL , 
    `takecount` INT NOT NULL , 
    `price` INT NOT NULL , 
    `validtime` DATETIME NOT NULL , 
    `takemode` ENUM('��������') NOT NULL , 
    `withdevice` ENUM('yes','no') NOT NULL , 
    `devicecontent` CHAR(50) NOT NULL , 
    `checkstatus` ENUM('�����','ͨ��','δͨ��') NOT NULL , 
    `sellstatus` ENUM('�ϼ�','�¼�','�ݸ�') NOT NULL , 
    `monthdealcount` TINYINT NOT NULL , 
    `likedcount` INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES ProductBaseInfotbl(productid)
    ) ENGINE = InnoDB;
    
CREATE TABLE  IF NOT EXISTS `yingtu`.`PhotographerProductCategorytbl` ( 
    `id` INT NOT NULL AUTO_INCREMENT COMMENT '��¼id' , 
    `name` CHAR(20) NOT NULL COMMENT '������' , 
    `c1` CHAR(10) NOT NULL COMMENT 'һ��������' , 
    `c2` CHAR(10) NOT NULL COMMENT '����������' ,
    PRIMARY KEY(id)
    ) 
    ENGINE = InnoDB COMMENT = '��Ӱ��Ʒ�����';    

CREATE TABLE IF NOT EXISTS `yingtu`.PhotographerProductCountFormulatbl ( 
    `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '��¼id' , 
    `personcount` INT NOT NULL COMMENT '��������' , 
    `timelength` INT NOT NULL COMMENT '����ʱ��' , 
    `countresult` VARCHAR(20) NOT NULL COMMENT '����.{b:40,m:75}',
    PRIMARY KEY(id)
    ) ENGINE = InnoDB COMMENT = '��Ӱ��Ʒ������Ӧ��';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`PhotographerProductPriceFormulatbl` ( 
    `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '��¼id' , 
    `personcount` INT NOT NULL COMMENT '��������' , 
    `grade` INT NOT NULL COMMENT '��Ӱʦ����' , 
    `priceresult` INT(100) NOT NULL COMMENT '���ռ۸�',
    PRIMARY KEY(id)
    ) ENGINE = InnoDB COMMENT = '��Ӱʦ��Ʒ�۸�����';    
    
CREATE TABLE IF NOT EXISTS `yingtu`.`DeviceContenttbl` ( 
    `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT, 
    `name` CHAR(10) NOT NULL , 
    `price` INT NOT NULL,
    PRIMARY KEY(id)
    ) 
    ENGINE = InnoDB COMMENT = '�豸��';    

CREATE TABLE IF NOT EXISTS `yingtu`.`ProductAccessorytbl` ( 
    `id` BIGINT UNSIGNED NOT NULL COMMENT '��¼id', 
    `category` ENUM('����','����','��ױʦ') NOT NULL COMMENT '���ײ�Ʒ����', 
    `name` VARCHAR(20) NOT NULL COMMENT '���ײ�Ʒ��', 
    `description` VARCHAR(256) NOT NULL COMMENT '��Ʒ����', 
    `price` INT NOT NULL COMMENT '��Ʒ�۸�', 
    `picid` VARCHAR(100) NOT NULL COMMENT '��ƷͼƬid', 
    `taketime` TIMESTAMP NOT NULL COMMENT '��Ʒ����ʱ��', 
    `personcount` INT NOT NULL COMMENT '��Ʒ����ʱ��', 
    `validtime` INT NOT NULL COMMENT '��Чʱ��', 
    `contact` VARCHAR(256) NOT NULL COMMENT '��ϵ��ʽ', 
    `location` VARCHAR(256) NOT NULL COMMENT '�ص�', 
    `route` VARCHAR(256) NOT NULL COMMENT '��ͨ�Ƽ�', 
    `selected` ENUM('yes','no') NOT NULL COMMENT '�Ƿ�ѡ��',
    primary key(id),
    CONSTRAINT FOREIGN KEY(id) REFERENCES ProductBaseInfotbl(productid)
    ) 
    ENGINE = InnoDB COMMENT = '���ײ�Ʒ��';

CREATE TABLE IF NOT EXISTS `yingtu`.`ShoppCharttbl` ( 
    `userno` BIGINT UNSIGNED NOT NULL COMMENT '�û�id�š����', 
    `productno` BIGINT UNSIGNED NOT NULL COMMENT '��Ʒid�š����', 
    `amount` INT NOT NULL COMMENT '��Ʒ����', 
    `addtime` TIMESTAMP NOT NULL COMMENT '��Ʒ����ʱ��', 
    `status` ENUM('δ����','�ѹ���') NOT NULL COMMENT '��Ʒ״̬', 
    `price` INT NOT NULL COMMENT '�۸��ܼ�',
    primary key(userno),
    CONSTRAINT FOREIGN KEY(userno) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '���ﳵ��';

CREATE TABLE IF NOT EXISTS `yingtu`.`OrderSheettbl` ( 
    `id` BIGINT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '��¼��', 
    `productcategory` ENUM('��Ӱ','���ײ�Ʒ') NOT NULL COMMENT '��Ʒ����', 
    `productcount` INT NOT NULL COMMENT '��Ʒ����', 
    `customername` CHAR(20) NOT NULL COMMENT '�˿�����', 
    `userno` BIGINT UNSIGNED NOT NULL COMMENT '�û�no�����', 
    `contact` VARCHAR(256) NOT NULL COMMENT '��ϵ��ʽ', 
    `address` VARCHAR(256) NOT NULL COMMENT '��ַ', 
    `city` VARCHAR(20) NOT NULL COMMENT '����', 
    `esheet` VARCHAR(256) NOT NULL COMMENT '���Ӷһ�ȯ', 
    `createtime` TIMESTAMP NOT NULL COMMENT '��������ʱ��', 
    `status` ENUM('�Ѹ���','�ȴ�����') NOT NULL COMMENT '����״̬',
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(userno) REFERENCES UserLogintbl(id)
    ) 
    ENGINE = InnoDB COMMENT = '������';

CREATE TABLE IF NOT EXISTS `yingtu`.`eSheettbl` ( 
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '��¼id' , 
    `productno` BIGINT UNSIGNED NOT NULL COMMENT '��Ʒid��', 
    `price` INT UNSIGNED NOT NULL COMMENT '�۸�' , 
    `sn` CHAR(64) NOT NULL COMMENT '�һ�ȯ��' , 
    `validtime` TIMESTAMP NOT NULL COMMENT '��Ч��' , 
    `endtime` TIMESTAMP NOT NULL COMMENT '��ֹ����' , 
    `content` VARCHAR(256) NOT NULL COMMENT '����' , 
    `dealid` BIGINT UNSIGNED NOT NULL COMMENT '������' , 
    `contactperson` CHAR(20) NOT NULL COMMENT '��ϵ��' , 
    `contacmode` VARCHAR(256) NOT NULL COMMENT '���׷�ʽ' , 
    `address` VARCHAR(256) NOT NULL COMMENT '��ַ' , 
    `star` ENUM('1star','2star','3star','4star','5star') NOT NULL COMMENT '�����Ǽ�' , 
    `status` ENUM('��Ч','��ʹ��','����','�˿���','��ʹ��','����') NOT NULL COMMENT '�һ�ȯ״̬',
    PRIMARY KEY(id),
    CONSTRAINT FOREIGN KEY(dealid) REFERENCES OrderSheettbl(id),
    CONSTRAINT FOREIGN KEY(productno) REFERENCES ProductBaseInfotbl(productid)
    ) 
    ENGINE = InnoDB COMMENT = '���Ӷһ�ȯ��';

INSERT INTO `userlogintbl` (`id`, `userid`, `password`, `nickname`) VALUES (NULL, 'quest', '111111', 'thinkest fly');
INSERT INTO `userlogintbl` (`id`, `userid`, `password`, `nickname`) VALUES (NULL, 'lihill', '222222', 'li hill');

    
INSERT INTO `photographerproductcategorytbl` (`name`, `c1`, `c2`) VALUES ('����д��', '����', 'д��');
INSERT INTO `photographerproductcategorytbl` (`name`, `c1`, `c2`) VALUES ('��ͯ��Ӱ', '����', 'д��');
INSERT INTO `photographerproductcategorytbl` (`name`, `c1`, `c2`) VALUES ('��������', '��ʳ', '');
    
INSERT INTO `tagtbl` (`id`, `category1`, `category2`, `tagname`) VALUES (NULL, NULL, NULL, '��ʳ');
INSERT INTO `tagtbl` (`id`, `category1`, `category2`, `tagname`) VALUES (NULL, NULL, NULL, 'д��');
INSERT INTO `tagtbl` (`id`, `category1`, `category2`, `tagname`) VALUES (NULL, NULL, NULL, '��ͯ');
INSERT INTO `tagtbl` (`id`, `category1`, `category2`, `tagname`) VALUES (NULL, NULL, NULL, '��Ӱ');    