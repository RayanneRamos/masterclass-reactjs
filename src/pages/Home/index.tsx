import logoImage from '../../assets/logo.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from 'phosphor-react'
import './styles.css'

export function Home() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <img className='logo' src={logoImage} alt="Logo do Twitter" />
        <nav className='main-navigation'>
          <a className='active' href=''>
            <House weight='fill' />
            Home
          </a>
          <a href=''>
            <Hash />
            Explore
          </a>
          <a href=''>
            <Bell />
            Notification
          </a>
          <a href=''>
            <Envelope />
            Messages
          </a>
          <a href=''>
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href=''>
            <FileText />
            Lists
          </a>
          <a href=''>
            <User />
            Profile
          </a>
          <a href=''>
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className='new-tweet' type='button'>Tweet</button>
      </aside>
      <div className="content">
        <main className='timeline'>
          <div className='timeline-header'>
            Home
            <Sparkle />
          </div>
          <form className='new-tweet-form'>
            <label htmlFor='tweet'>
              <img src='https://github.com/RayanneRamos.png' alt='Rayanne Ramos' />
              <textarea id='tweet' placeholder="What's happening?" />
            </label>
            <button type='submit'>Tweet</button>
          </form>
        </main>
      </div>
    </div>
  )
}