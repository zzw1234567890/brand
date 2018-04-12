<?php
    //开始类
    namespace lib;
    //加载核心文件
    foreach($paths as $path){
        require_once($path);
    }
    class start{

        public static $con;
        public static $med;
        public static $config;

        public static function init_db($config){
            //初始化，获取数据库配置
            core\DB::init($config);
        }

        public static function inspect(){
            //检查提交参数中是否带有非法命令
            if(!empty($_GET)){
                foreach ($_GET as $value) {
                    if((stripos($value,"group by") >= 0) or (stripos($value,"union") >= 0) or (stripos($value,"drop") >= 0)){
                        \lib\core\view::display("index","您提交的数据中含有恶意字符,请重新修改!");
                        die;
                    }
                }
            }
        }

        public static function init_con(){
            $conArr = array('index');   //定义可用控制器列表（防止控制器不存在的情况）
            self::$con = (isset($_GET['con']) and in_array($_GET['con'],$conArr)) ? $_GET['con'] : 'index';
        }

        public static function init_med(){
            $medArr = array('index');//定义方法列表
            self::$med = (isset($_GET['med']) and in_array($_GET['med'],$medArr)) ? $_GET['med'] : 'index';
        }

        public static function init_view($config){
            //初始化，获取视图引擎配置
            core\view::init($config);
        }

        public static function init_log($config){
            //初始化，获取日志配置
            core\log::init($config);
        }

        public static function run($config){
            //加载配置
            self::$config = $config;
            //加载数据库
            self::init_db($config['dbconfig']);
            //初始化视图
            self::init_view($config['viewconfig']);
            //初始化日志
            self::init_log($config['logconfig']);
            //检查提交参数中是否带有非法命令
            self::inspect();
            //获取控制器
            self::init_con();
            //获取控制器方法
            self::init_med();
        }
    }
?>