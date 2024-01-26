const postService = () => {
    // 게시글 작성
    // 첨부파일 정보(fileName, filePath, fileSize)는 다른 곳에서 처리한다.
    const write = ({ title, content, ...rest }, callback) => {
        if (callback) {
            callback(...rest);
        }
    };

    // 게시글 목록
    const findAll = (callback) => {
        const posts = [{}, {}];
        if (callback) {
            callback(posts || []);
        }
    };
    // 게시글 조회
    const findById = (id, callback) => {
        const post = {
            id: 1,
            title: "테스트제목1",
            content: "테스트내용1",
            files: [],
        };
        if (callback) {
            callback(post);
        }
    };

    // 게시글 수정
    const update = ({ id, title, content, files }, callback) => {
        if (callback) {
            callback(files);
        }
    };

    // 게시글 삭제
    const remove = (id) => {};

    return {
        write: write,
        findAll: findAll,
        findById: findById,
        update: update,
        remove: remove,
    };
};

// 게시글 작성
const post = {
    title: "테스트제목1",
    content: "테스트내용1",
    fileName: "",
    filePath: "",
    fileSize: "",
};

postService.write(post, fileService.insert);

// 게시글 목록
postService.findAll((posts) => {
    if (!posts.length) {
        console.log("게시글이 없습니다.");
    }
    console.log(posts);
});

// 게시글 조회
postService.findById(1, (post) => {
    console.log(post);

    // 게시글 수정
    post.title = "수정된 제목1";
    postService.update(post);

    // 게시글 삭제
    postService.remove(post.id);
});
