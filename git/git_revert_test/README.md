# GIT REVERT TESTING

싱글 파일에선 안된던데.. 더 테스트 해보아야겟다.

	[flrngel@flx]:~/sandbox/git_revert_test$ touch 1
	[flrngel@flx]:~/sandbox/git_revert_test$ git init ; git checkout -b master
	Initialized empty Git repository in /home/flrngel/sandbox/git_revert_test/.git/
	[flrngel@flx]:~/sandbox/git_revert_test$ git add 1 ; git commit -m "1"
	[master (root-commit) 8c99f88] 1
	 0 files changed
	 create mode 100644 1
	[flrngel@flx]:~/sandbox/git_revert_test$ touch 2
	[flrngel@flx]:~/sandbox/git_revert_test$ git add 2 ; git commit -m "2"
	[master 8154d61] 2
	 0 files changed
	 create mode 100644 2
	[flrngel@flx]:~/sandbox/git_revert_test$ touch 3 ; git add 3 ; git commit -m "3"
	[master bf8c63d] 3
	 0 files changed
	 create mode 100644 3
	[flrngel@flx]:~/sandbox/git_revert_test$ git log
	commit bf8c63d0eae5858f2af362b6a9116bf4984c4f1f
	Author: flrngel <flrngel@gmail.com>
	Date:   Thu Jun 19 14:44:12 2014 +0900

			3

	commit 8154d614341db73a88b3df7ec69be129f1e6889d
	Author: flrngel <flrngel@gmail.com>
	Date:   Thu Jun 19 14:44:03 2014 +0900

			2

	commit 8c99f88e4cc7334eae00379586b03cd5dadc9dd7
	Author: flrngel <flrngel@gmail.com>
	Date:   Thu Jun 19 14:43:56 2014 +0900

			1
	[flrngel@flx]:~/sandbox/git_revert_test$ git revert HEAD^
	[master 4eaaa06] Revert "2"
	 0 files changed
	 delete mode 100644 2
	[flrngel@flx]:~/sandbox/git_revert_test$ git status
	# On branch master
	nothing to commit (working directory clean)
	[flrngel@flx]:~/sandbox/git_revert_test$ git log
	commit 4eaaa06645e60030aaac9e1ea163d159a703bb41
	Author: flrngel <flrngel@gmail.com>
	Date:   Thu Jun 19 14:44:32 2014 +0900

			Revert "2"

			This reverts commit 8154d614341db73a88b3df7ec69be129f1e6889d.

	commit bf8c63d0eae5858f2af362b6a9116bf4984c4f1f
	Author: flrngel <flrngel@gmail.com>
	Date:   Thu Jun 19 14:44:12 2014 +0900

			3

	commit 8154d614341db73a88b3df7ec69be129f1e6889d
	Author: flrngel <flrngel@gmail.com>
	Date:   Thu Jun 19 14:44:03 2014 +0900

			2

	commit 8c99f88e4cc7334eae00379586b03cd5dadc9dd7
	Author: flrngel <flrngel@gmail.com>
	Date:   Thu Jun 19 14:43:56 2014 +0900

			1
	[flrngel@flx]:~/sandbox/git_revert_test$ ls -al
	total 12
	drwxr-xr-x 3 flrngel flrngel 4096 Jun 19 14:44 .
	drwxr-xr-x 4 flrngel flrngel 4096 Jun 19 14:43 ..
	-rw-r--r-- 1 flrngel flrngel    0 Jun 19 14:43 1
	-rw-r--r-- 1 flrngel flrngel    0 Jun 19 14:44 3
	drwxr-xr-x 8 flrngel flrngel 4096 Jun 19 14:44 .git
