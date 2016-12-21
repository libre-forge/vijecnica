<template src='./courses-list.html'></template>

<style scoped src='./courses-list.css'></style>

<script>
import courseCard from '../course-card/course-card'

export default {
    name: 'courses-list',
    data: function () {
        return {
            courses: [{
                id: 1,
                name: 'GraphSQL',
                description: 'Learn GrapSQL',
                members: 5,
                members_limit: 10,
                status: 'active'
            }, {
                id: 2,
                name: 'Diseña y Crea una aplicación iOS',
                description: 'Aprende a crear aplicaciones para iPhones y para iPads',
                members: 5,
                members_limit: 10,
                status: 'active'
            }, {
                id: 3,
                name: 'Introduction to Computer Science',
                description: 'In this introduction to computer programming course, you’ll learn and practice key computer science concepts by building your own versions of popular web applications. You’ll learn Python, a powerful, easy-to-learn, and widely used programming language, and you’ll explore computer science basics, as you build your own search engine and social network.',
                members: 5,
                members_limit: 10,
                status: 'active'
            }, {
                id: 6,
                name: 'Google\'s python Class',
                description: 'These materials are used within Google to introduce Python to people who have just a little programming experience. The first exercises work on basic Python concepts like strings and lists, building up to the later exercises which are full programs dealing with text files, processes, and http connections. The class is geared for people who have a little bit of programming experience in some language, enough to know what a "variable" or "if statement" is. Beyond that, you do not need to be an expert programmer to use this material.',
                members: 5,
                members_limit: 10,
                status: 'ongoing'
            },
            {
                id: 7,
                name: 'Design of Computer Programs',
                description: 'Programming Principles',
                members: 5,
                members_limit: 10,
                status: 'ongoing'
            },
            {
                id: 8,
                name: 'Explore a Career as a Software Engineer',
                description: 'Learn the basics of programming and software development',
                members: 4,
                members_limit: 10,
                status: 'ongoing'
            },
            {
                id: 9,
                name: 'Software Testing',
                description: 'When writing software, destruction can be just as valuable as creation. Learn how to catch bugs and break software as you discover different testing methods that will help you build better software.',
                members: 1,
                members_limit: 10,
                status: 'archived'
            },
            {
                id: 10,
                name: 'Mathematics for Computer Science',
                description: 'This course covers elementary discrete mathematics for computer science and engineering. It emphasizes mathematical definitions and proofs as well as applicable methods. Topics include formal logic notation, proof methods; induction, well-ordering; sets, relations; elementary graph theory; integer congruences; asymptotic notation and growth of functions; permutations and combinations, counting principles; discrete probability. Further selected topics may also be covered, such as recursive definition and structural induction; state machines and invariants; recurrences; generating functions.',
                members: 8,
                members_limit: 10,
                status: 'archived'
            }]
        }
    },
    props: {
        subject: {
            type: String,
            required: true
        }
    },
    components: {
        courseCard
    },
    watch: {
        subject: function (val) {
            console.log(val) // API CALL and overwrite courses
        }
    }
}
</script>
