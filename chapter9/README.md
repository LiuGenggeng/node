##进程与子进程
###使用exec方法开启子进程
在child_process模块中，可以使用exec方法开启一个用于运行某个命令的子进程并缓存子进程中的输出结果，用法为:`child_process.exec(command,[options],[callback])`.

