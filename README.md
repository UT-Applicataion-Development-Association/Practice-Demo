# Practice-Demo
This is a practice demo for learning new technology stack.

这个练习的预计总花费时间约为4个小时.

# 在开始这个项目之前需要的知识：
1. 简单了解JavaScript中的**变量**、**函数**、**循环与条件控制**语法
   - [中文教程](https://www.runoob.com/js/js-tutorial.html)
   - [英文教程](https://www.w3schools.com/js/)
2. Git
   1. GitHub使用流程
      1. `git clone [url]` [官方使用教程](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
      2. `git checkout dev` 进入develop分支
      3. `git checkout -b BRANCHNAME` *BRANCHNAME*为自己设定的分支名，命名规则请参考下文**Gitflow**。如果想更深入的了解branch相关知识请参考[这个](https://www.liaoxuefeng.com/wiki/896043488029600/900003767775424)
      4. ...修改文件ing...
      5. `git add .` 添加所有更改过的文件
      6. `git commit -m ''` 添加commit信息，请尽可能详细明确
      7. `git push origin BRANCHNAME` 提交代码，其中*BRANCHNAME*和刚刚设置的相同
   2. Gitflow 的具体使用方法与原理可以参考[这个](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)链接，在观看的过程中请跳过使用`git-flow extensions`的相关内容。我们本次提交时使用的*BRANCHNAME*为`demo-<Your GitHub user name>`
3. Express
   - 请完成[官方网站](http://expressjs.com/en/starter/installing.html)中红框圈出部分的阅读
   <img width="585" alt="Screen Shot 2022-07-05 at 3 04 57 PM" src="https://user-images.githubusercontent.com/53719791/177398340-85f59a58-d439-4e5b-802e-92de248f51f4.png">
   <img width="571" alt="Screen Shot 2022-07-05 at 3 04 42 PM" src="https://user-images.githubusercontent.com/53719791/177398353-7bb4e8d2-3134-4550-8608-1ddd75076dde.png">

# 在完成上述部分之后你就可以开始尝试clone我们这个项目啦～

使用`npm install`和`npm run`运行整个项目

而在这个demo中你需要满足的要求是：

1. GET /
   - Response Example: 'This is a GET API'
2. POST /
   - Response Example: 'This is a POST API'
3. PUT /
   - Response Example: 'This is a PUT API'
4. DELETE /
   - Response Example: 'This is a DELETE API'
5. 请只使用一次router调用完成上述效果 [提示链接](http://expressjs.com/en/guide/using-middleware.html#:~:text=Here%20is%20an%20example%20of%20loading%20a%20series%20of%20middleware%20functions%20at%20a%20mount%20point%2C%20with%20a%20mount%20path.%20It%20illustrates%20a%20middleware%20sub%2Dstack%20that%20prints%20request%20info%20for%20any%20type%20of%20HTTP%20request%20to%20the%20/user/%3Aid%20path.)
6. POST /user/:id
   - Description: 如果id为`12345`返回 `User id is correct` 否则返回 `User id is wrong`
   - Response Example:
      - POST /user/12345
         - 'User id is correct'
      - POST /user/11111
         - 'User id is wrong'
   - 请使用middleware达成此效果 [提示链接](http://expressjs.com/en/guide/using-middleware.html#:~:text=otherwise%20pass%20control%20to%20the%20next%20middleware%20function%20in%20this%20stack)
7. GET /addFive/:num
   - Description: 返回传入的num和5相加后的数值。
   - Response Example:
      - GET /addFive/3
         - '8'
      - GET /addFive/10
         - '15'
   - [提示链接1](https://www.runoob.com/js/js-type-conversion.html#:~:text=Number(%223.14%22)%C2%A0%C2%A0%C2%A0%20//%20%E8%BF%94%E5%9B%9E%203.14)
   - [提示链接2](https://www.runoob.com/jsref/jsref-tostring-number.html#:~:text=%E5%AE%9E%E4%BE%8B-,%E6%8A%8A%E6%95%B0%E5%AD%97%E8%BD%AC%E6%8D%A2%E4%B8%BA%E5%AD%97%E7%AC%A6%E4%B8%B2%EF%BC%9A,15,-%E5%B0%9D%E8%AF%95%E4%B8%80%E4%B8%8B%20%C2%BB)

### 注意：
1. 请经常使用`npm test`命令查看代码是否可以通过测试满足要求
2. 代码需要符合Google style规范，可以使用`npx eslint .`命令检查是否符合规范
