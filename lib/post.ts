import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
console.log('process.cwd()', process.cwd());
console.log('postsDirectory', postsDirectory);

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    console.log('fileNames', fileNames);
    const allPostsData = fileNames.map((fileName) => {
        // pre-rendering.md, ssg-ssr.md -> .md 제거
        const id = fileName.replace(/\.md$/, '');

        // 파일 명을 문자열로 가져오기
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // matter를 통해 파일 내용을 객체로 변환
        const matterResult = matter(fileContents);

        return {
            id,
            ...(matterResult.data as { date: string; title: string }),
        };
    });
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        return -1;
    });
}
