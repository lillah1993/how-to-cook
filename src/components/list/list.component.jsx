import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  goBack,
  goNext,
  setNextPageState,
} from "../../redux/list/list.actions";
import { setQuery } from "../../redux/search/search.actions";
import { setCurrentList } from "../../redux/list/list.actions";
import ListElement from "../list-element.component";
import getData from "../search/fetchContent";
import "./list.style.scss";
import { useEffect } from "react";

const List = ({
  list,
  page,
  more,
  goBack,
  goNext,
  query,
  setQuery,
  setCurrentList,
  setNextPageState,
}) => {
  //   const handlClick = () => {
  //     getData(query, page, setNextPageState, setQuery).then((res) =>
  //       setCurrentList(res)
  //     );
  //   };

  //   const handlClickNext =  () => {
  //       getData(query, page, setNextPageState, setQuery).then((res) =>
  //         setCurrentList(res)
  //       );

  //   };

  useEffect(() => {
    const handlClick = () => {
      console.log("firing func");
      if (query) {
        getData(query, page, setNextPageState, setQuery).then((res) =>
          setCurrentList(res)
        );
      }
    };
    handlClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  let buttons;
  const next = (
    <div className="next" onClick={() => goNext()}>
      next page
    </div>
  );

  const previous = (
    <div className="previous" onClick={() => goBack()}>
      previous page
    </div>
  );
  if (page === 1 && more) {
    buttons = next;
  } else if (page === 1 && more === false) {
    buttons = null;
  } else if (page !== 1 && more) {
    buttons = (
      <>
        {previous}
        {next}
      </>
    );
  } else if (page !== 1 && more !== true) {
    buttons = previous;
  }
  return (
    <div className="list">
      <div className="recepies">
        {list
          ? list.map(({ recipe }) => (
              <ListElement key={uuidv4()} recipe={recipe} />
            ))
          : null}
      </div>
      <div className="pages">{list ? buttons : null}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  page: state.list.currentPage,
  more: state.list.more,
  query: state.search.currentQuery,
});

const mapDispatchtoProps = (dispatch) => ({
  goNext: () => dispatch(goNext()),
  goBack: () => dispatch(goBack()),
  setQuery: (query) => dispatch(setQuery(query)),
  setCurrentList: (list) => dispatch(setCurrentList(list)),
  setNextPageState: (more) => dispatch(setNextPageState(more)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(List);
