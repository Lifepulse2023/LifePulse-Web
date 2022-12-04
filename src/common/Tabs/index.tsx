import Login from "@components/login";
import Registration from "@components/registration";
import Link from "next/link";
import { withRouter } from "next/router";
import AppStyle from "./style.module.scss";

const AppTabs = ({ router }) => {
  const {
    query: { tab },
  } = router;
  const isTabOne = tab === "1" || tab == null;
  const isTabTwo = tab === "2";

  const activateTabOne = () => {
    return `${AppStyle.tabItem} ${isTabOne ? "" : AppStyle.notSelected}`;
  };

  const activateTabTwo = () => {
    return `${AppStyle.tabItem} ${isTabTwo ? "" : AppStyle.notSelected}`;
  };

  const getTabBody = () => {
    return isTabOne ? <Login /> : <Registration />;
  }

  return (
    <section className={AppStyle.appTabWrapper}>
      <nav className={AppStyle.appTabNav}>
        <div className={activateTabOne()}>
          <Link href={{ pathname: "/", query: { tab: "1" } }}>
            <h1>Login</h1>
          </Link>
        </div>
        <div className={activateTabTwo()}>
          <Link href={{ pathname: "/", query: { tab: "2" } }}>
            <h1>Create Account</h1>
          </Link>
        </div>
        <div className={AppStyle.hack}></div>
      </nav>
      <main className={AppStyle.main}>
        {getTabBody()}
      </main>
    </section>
  );
};

export default withRouter(AppTabs);
