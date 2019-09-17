import * as React from 'react';
import BlogCard from '../Components/BlogCard'
import { json } from 'body-parser';
import { IBlog } from '../utils/interfaces';

class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch(`/api/blogs`)
            let data = await res.json()
            this.setState({ blogs: data })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <section className="row col-md-12 justify-content-center">
                {this.state.blogs.map(blog => {
                    return(
                        <section className="justify-content-center row">
                        <BlogCard blogs={blog} key={blog.id} />
                        </section>

                    )
                })}
            </section>
        )
    }
}

export interface IHomeProps {}

export interface IHomeState {
    blogs: Array<IBlog>
}

export default Home;