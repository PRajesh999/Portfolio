import redhat from '../assets/svg/projects/redhat.png'
import html from '../assets/svg/projects/html.png'
import oracle from '../assets/svg/projects/oracle.png'
import java from '../assets/svg/projects/java.png'
import python from '../assets/svg/projects/python.png'

export const achievementData = {
    //  bio : "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
    bio : "Education is not the learning of facts, but the training of the mind to think. - Albert Einstein",
    achievements: [
        {
            id: 1,
            title: 'RedHat',
            details: 'Certifies proficiency in Linux system administration, including user management, security, networking, and automation using shell scripting.',
            date: 'June 20, 2024',
            field: 'Administration',
            image: redhat
        },
        {
            id: 2,
            title: 'HTML & CSS',
            details: 'Demonstrates expertise in building structured, responsive, and visually appealing web pages with modern styling techniques.',
            date: 'May 6, 2023',
            field: 'WebDevelopment',
            image: html
        },
        {
            id: 3,
            title: 'Database Foundations',
            details: 'Certifies skills in SQL, relational database concepts, data retrieval, and database management fundamentals.',
            date: 'May 17, 2024',
            field: 'Programming',
            image: oracle
        },
        {
            id: 4,
            title: 'Java',
            details: 'Covers programming fundamentals, data structures, automation, and problem-solving with Python.',
            date: 'July 8, 2024',
            field: 'Development',
            image: java
        },
        {
            id: 5,
            title: 'Python',
            details: 'Red Hat certification validates your skills in system administration, security, and automation with Red Hat technologies.',
            date: 'May 11, 2023',
            field: 'Database',
            image: python
        }
    ]
};


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/