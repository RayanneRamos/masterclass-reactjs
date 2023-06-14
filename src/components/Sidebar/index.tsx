import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from "phosphor-react";
import logoImage from "../../assets/logo.svg";
import "./styles.css";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={logoImage} alt="Logo do Twitter" />
      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          Home
        </NavLink>
        <a href="">
          <Hash />
          Explore
        </a>
        <a href="">
          <Bell />
          Notification
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href="">
          <FileText />
          Lists
        </a>
        <a href="">
          <User />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>
      <button className="new-tweet" type="button">
        Tweet
      </button>
    </aside>
  );
}
