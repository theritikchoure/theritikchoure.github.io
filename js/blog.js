const fetchDetails = async (body) => {
    let template = `
    <div class="col-md-4">
        <div class="card mb-4 box-shadow">
        <img class="card-img-top" src=${body.thumbnail_src} alt="Card image cap">
        <div class="card-body">
            <p class="card-text">${body.name}</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <a href=${body.source_url} target="_blank" class="btn btn-sm btn-outline-secondary">View</a>
            </div>
            <small class="text-muted">${body.reading_time} mins</small>
            </div>
        </div>
        </div>
    </div>
    `;

    return template;
}

const contributorsList = [
    {
        name: "Testing and Debugging Backend Systems: Best Practices and Tools",
        thumbnail_src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*1z4CkOJe1DqP-XTMcGD-lw.png",
        source_url: "https://ritikchourasiya.medium.com/testing-and-debugging-backend-systems-best-practices-and-tools-3037d8ec1e2d",
        reading_time: 8,
    },
    {
        name: "What is JWT Token and How it works",
        thumbnail_src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*GqJi5dmqZIwDgTROF3RJGA.png",
        source_url: "https://ritikchourasiya.medium.com/what-is-jwt-token-and-how-it-works-32e7bbe8e635",
        reading_time: 6,
    },
    {
        name: "Unlock the Dockerfile: Best Practices for Dockerfile Creation",
        thumbnail_src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*UQXsesMb5Yllmu_VX_d79Q.png",
        source_url: "https://ritikchourasiya.medium.com/unlock-the-dockerfile-best-practices-for-dockerfile-creation-fa0e267c7a8",
        reading_time: 6,
    },
    {
        name: "Ultimate Guide About Docker Volumes",
        thumbnail_src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*83pCfSgOLL-cd2mq8MyIpQ.png",
        source_url: "https://ritikchourasiya.medium.com/ultimate-guide-about-docker-volumes-ef7fcba9bcf2",
        reading_time: 5,
    },
    {
        name: "Why you need a GitHub profile as a software developer",
        thumbnail_src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*eVJQOA_Ue25XLSEI9M9irQ.png",
        source_url: "https://ritikchourasiya.medium.com/why-you-need-a-github-profile-as-a-software-developer-483a1bf02d17",
        reading_time: 4,
    },
    {
        name: "Building RESTful APIs with Node.js and Express",
        thumbnail_src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*0zcNC3TdnBCnblDjv6vnPw.png",
        source_url: "https://ritikchourasiya.medium.com/building-restful-apis-with-node-js-and-express-3f9788632021",
        reading_time: 9,
    },
]

let generateColumn = async () => {
    console.log(contributorsList.length);
    let row = document.getElementById('blog-row');

    let column = '';

    for (let index = 0; index < contributorsList.length; index++) {
        let hello = await fetchDetails(contributorsList[index]);
        column = column + hello;
    }

    // return;
    row.innerHTML = column;
}

generateColumn();