
/**
 * pages 경로에서 확장자 vue의 파일들을 한번에 내보내기한다.
 *
 */
export default require.context('./', true, /^\.\/.*\.vue$/)
	.keys()
	.map(view => view.slice(2))
