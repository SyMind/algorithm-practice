# 查找旋转数组的最小值
假定一个排序数组以某个未知元素作为支点做了旋转，如：原数组 0 1 2 4 5 6 7 旋转后得到 4 5 6 7 0 1 2。请找出旋转后数组的最小值，假定数组中没有重复数字。

## 思路
用两个指针 low，height 分别指向数组的第一个元素和最后一个元素。如果是正常的排序数组（元素间不重复），第一个元素肯定小于最后一个元素。
计算中间位置 mid = (low + height) / 2。
若 A[mid] > A[low]，则 A[low, low]