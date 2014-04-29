# git merge test

	* commit 6b39f359f2d931fb6868cbbbbcc6f1ce762a2ec7
	| Author: flrngel <flrngel@gmail.com>
	| Date:   Tue Apr 29 17:29:19 2014 +0900
	|
	|     4
	|
	| * commit 562063eccc8abcf3da37e0ca739ff8d4ad622bde
	| | Author: flrngel <flrngel@gmail.com>
	| | Date:   Tue Apr 29 17:28:08 2014 +0900
	| |
	| |     3
	| |
	| * commit 11dcabd8b536c04e562d8cca0e56c5e50109b8fb
	|/  Author: flrngel <flrngel@gmail.com>
	|   Date:   Tue Apr 29 17:27:55 2014 +0900
	|
	|       2
	|
	* commit 35b0b7c635286c278a3dfbed4041e50c30d03fc9
		Author: flrngel <flrngel@gmail.com>
		Date:   Tue Apr 29 17:27:25 2014 +0900

				1


	[flrngel@flx]:~/lab/git/merge-test$ git merge test
	Merge made by the 'recursive' strategy.
	 test2.md |    1 +
	 1 file changed, 1 insertion(+)
	 create mode 100644 test2.md



	*   commit 116a5e148e9ef984e4fff51cc0ae0c3ab65aa300
	|\  Merge: 6b39f35 562063e
	| | Author: flrngel <flrngel@gmail.com>
	| | Date:   Tue Apr 29 17:30:38 2014 +0900
	| |
	| |     Merge branch 'test'
	| |
	| * commit 562063eccc8abcf3da37e0ca739ff8d4ad622bde
	| | Author: flrngel <flrngel@gmail.com>
	| | Date:   Tue Apr 29 17:28:08 2014 +0900
	| |
	| |     3
	| |
	| * commit 11dcabd8b536c04e562d8cca0e56c5e50109b8fb
	| | Author: flrngel <flrngel@gmail.com>
	| | Date:   Tue Apr 29 17:27:55 2014 +0900
	| |
	| |     2
	| |
	* | commit 6b39f359f2d931fb6868cbbbbcc6f1ce762a2ec7
	|/  Author: flrngel <flrngel@gmail.com>
	|   Date:   Tue Apr 29 17:29:19 2014 +0900
	|
	|       4
	|
	* commit 35b0b7c635286c278a3dfbed4041e50c30d03fc9
		Author: flrngel <flrngel@gmail.com>
		Date:   Tue Apr 29 17:27:25 2014 +0900

				1
