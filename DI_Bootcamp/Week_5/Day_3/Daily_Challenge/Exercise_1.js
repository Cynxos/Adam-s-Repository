class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

const video1 = new Video("JavaScript Tutorial", "Alice", 300);
video1.watch(); 

const video2 = new Video("Python Tutorial", "Bob", 450);
video2.watch(); 

const videoData = [
    { title: "HTML Basics", uploader: "Charlie", time: 200 },
    { title: "CSS Flexbox", uploader: "Dave", time: 180 },
    { title: "React Hooks", uploader: "Eve", time: 600 },
    { title: "Node.js Express", uploader: "Frank", time: 400 },
    { title: "Vue.js Guide", uploader: "Grace", time: 350 }
];

const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

videos.forEach(video => video.watch());
