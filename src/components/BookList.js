import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

/* class BookList extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (
            <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>the way of king</li>
                    <li style={{ background: theme.ui }}>the name of the wind</li>
                    <li style={{ background: theme.ui }}>the final empire</li>
                </ul>
            </div>
        );
    }
} */

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className="" style={{ color: theme.syntax, background: theme.bg }} >
            <div className="grid grid-cols-4 gap-4">
                {books.map(book => {
                    return (
                        <div key={book.id} style={{ background: theme.ui }} className="max-w-sm rounded overflow-hidden shadow-lg" >
                            <img src="https://source.unsplash.com/random" alt="" />
                            <div className="px-5 py-4" >
                                <div className="font-bold text-purple-500 text-xl-mb-2">
                                    Photo by John Doe
                        </div>
                            </div>
                            <ul>
                                <li><strong>Views: </strong> 4000</li>
                                <li><strong>Downloads: </strong> 300</li>
                                <li><strong>Likes: </strong> 400</li>
                            </ul>
                        </div>

                    )
                })}
            </div>
        </div>

    );
}

export default BookList;