import LoaderStyle from './styles.module.scss';
export default function AppLoader() {
  return (
    <>
      <div id={LoaderStyle.circularG}>
        <div id={LoaderStyle.circularG_1} className={LoaderStyle.circularG}></div>
        <div id={LoaderStyle.circularG_2} className={LoaderStyle.circularG}></div>
        <div id={LoaderStyle.circularG_3} className={LoaderStyle.circularG}></div>
        <div id={LoaderStyle.circularG_4} className={LoaderStyle.circularG}></div>
        <div id={LoaderStyle.circularG_5} className={LoaderStyle.circularG}></div>
        <div id={LoaderStyle.circularG_6} className={LoaderStyle.circularG}></div>
        <div id={LoaderStyle.circularG_7} className={LoaderStyle.circularG}></div>
        <div id={LoaderStyle.circularG_8} className={LoaderStyle.circularG}></div>
      </div>
    </>
  );
}
