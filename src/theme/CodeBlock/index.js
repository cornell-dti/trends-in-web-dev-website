/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwlTheme from 'prism-react-renderer/themes/nightOwl';
import Clipboard from 'clipboard';
import atomOneLightTheme from './atom-one-light-theme';
import styles from './styles.module.css';

const getTheme = () => {
  try {
    return localStorage.getItem('theme') === 'dark'
      ? nightOwlTheme
      : atomOneLightTheme;
  } catch (e) {
    return atomOneLightTheme;
  }
};

export default ({ children, className: languageClassName }) => {
  const [showCopied, setShowCopied] = useState(false);
  const target = useRef(null);
  const button = useRef(null);

  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTheme = getTheme();
      if (theme !== newTheme) {
        setTheme(newTheme);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [theme]);

  useEffect(() => {
    let clipboard;

    if (button.current) {
      clipboard = new Clipboard(button.current, {
        target: () => target.current
      });
    }

    return () => {
      if (clipboard) {
        clipboard.destroy();
      }
    };
  }, [button.current, target.current]);

  const language =
    languageClassName && languageClassName.replace(/language-/, '');

  const handleCopyCode = () => {
    window.getSelection().empty();
    setShowCopied(true);

    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={styles.codeBlockWrapper}>
          <pre
            ref={target}
            className={classnames(className, styles.codeBlock)}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
          <button
            ref={button}
            type="button"
            aria-label="Copy code to clipboard"
            className={styles.copyButton}
            onClick={handleCopyCode}
          >
            {showCopied ? 'Copied' : 'Copy'}
          </button>
        </div>
      )}
    </Highlight>
  );
};
