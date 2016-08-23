---
layout: post
author: fiona
title: git 常用命令
---

总结一下 git 的常用又常忘的命令。


```
git rebase -i HEAD~{num}
```
num 对应数字，这条命令是用来编辑 commit 信息的，有时候需要合并 commit 或是修改 commit 内容。提交之后会有提示在每条 commit 信息前加上对应的字母分别代表什么操作。  

```
git reset --hard HEAD~num
```
放弃本地修改，回到前 num 个版本。谨慎使用！

```
git pull --rebase origin {branch}
```
拉取远程分支并合并，加上rebase是防止在 commit log 里出现 merge。加上 rebase 这样会自然合并.
feifewhe
