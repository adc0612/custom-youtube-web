import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const keyword = inputRef.current.value;
    onSearch(keyword);
  };
  // Input에서 엔터 누를 시 search event 실행
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  // search button 클릭 시 search event 실행
  const onClick = () => {
    handleSearch();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src='/images/logo.png' alt='logo' />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input ref={inputRef} className={styles.input} type='search' placeholder='Search...' onKeyPress={onKeyPress} />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img className={styles.buttonImg} src='/images/search.png' alt='search' />
      </button>
    </header>
  );
});

export default SearchHeader;
