# git rebase test

	* commit 938e0130c92e7e650092bf0a5a4f8564159814df
	| Author: flrngel <flrngel@gmail.com>
	| Date:   Tue Apr 29 17:33:14 2014 +0900
	|
	|     4
	|
	| * commit 29d20ed64ecddeb740b90c53ad401032dbe20da5
	| | Author: flrngel <flrngel@gmail.com>
	| | Date:   Tue Apr 29 17:32:46 2014 +0900
	| |
	| |     3
	| |
	| * commit 7ac8e48e26f2aae141082b3fa97e7eb8f85587b7
	|/  Author: flrngel <flrngel@gmail.com>
	|   Date:   Tue Apr 29 17:32:32 2014 +0900
	|
	|       2
	|
	* commit 53351561eb1ec772f23d57e1e076521f215fabca
		Author: flrngel <flrngel@gmail.com>
		Date:   Tue Apr 29 17:32:03 2014 +0900

				1

	[flrngel@flx]:~/lab/git/rebase-test$ git checkout
	HEAD     master   test
	[flrngel@flx]:~/lab/git/rebase-test$ git checkout test
	Switched to branch 'test'
	[flrngel@flx]:~/lab/git/rebase-test$ git rebase master
	First, rewinding head to replay your work on top of it...
	Applying: 2
	Applying: 3
	[flrngel@flx]:~/lab/git/rebase-test$ git checkout master
	Switched to branch 'master'
	[flrngel@flx]:~/lab/git/rebase-test$ git merge test
	Updating 938e013..b4b9d5e
	Fast-forward
	 test2.md |    1 +
	 1 file changed, 1 insertion(+)
	 create mode 100644 test2.md



	[flrngel@flx]:~/lab/git/rebase-test$ git log --graph --color --all --pretty
	* commit b4b9d5ec3607e56caacdab2eb5b84354cdc8e553
	| Author: flrngel <flrngel@gmail.com>
	| Date:   Tue Apr 29 17:32:46 2014 +0900
	|
	|     3
	|
	* commit cdc23fb233ddb17832a9959e05564f0f99223e90
	| Author: flrngel <flrngel@gmail.com>
	| Date:   Tue Apr 29 17:32:32 2014 +0900
	|
	|     2
	|
	* commit 938e0130c92e7e650092bf0a5a4f8564159814df
	| Author: flrngel <flrngel@gmail.com>
	| Date:   Tue Apr 29 17:33:14 2014 +0900
	|
	|     4
	|
	* commit 53351561eb1ec772f23d57e1e076521f215fabca
		Author: flrngel <flrngel@gmail.com>
		Date:   Tue Apr 29 17:32:03 2014 +0900

				1
