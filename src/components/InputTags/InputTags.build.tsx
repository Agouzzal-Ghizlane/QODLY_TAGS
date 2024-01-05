import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, CSSProperties } from 'react';

import { IInputTagsProps } from './InputTags.config';

const InputTags: FC<IInputTagsProps> = ({ style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();
  const tagsCss: CSSProperties = {
    display: style?.display || 'inline-block',
    padding: style?.padding || '6px 12px',
    backgroundColor: style?.backgroundColor || 'rgb(218, 216, 216)',
    color: style?.color || 'rgb(48, 48, 48)',
    marginRight: style?.marginRight || '2px',
    marginBottom: style?.marginBottom || '0px',
    marginLeft: style?.marginLeft || '0px',
    marginTop: style?.marginTop || '0px',
    fontFamily: style?.fontFamily || 'inherit',
    fontWeight: style?.fontWeight || 400,
    fontSize: style?.fontSize || '14px',
    fontStyle: style?.fontStyle || 'normal',
    textDecorationLine: style?.textDecorationLine || 'none',
    textTransform: style?.textTransform || 'none',
    borderColor: style?.borderColor || '',
    borderWidth: style?.borderWidth || '0px',
    borderStyle: style?.borderStyle || 'none',
    borderRadius: style?.borderRadius || '12px',
  };
  const tags = [
    {
      name: 'High tech',
    },
    {
      name: 'Media',
    },
    {
      name: 'Technology',
    },
    {
      name: 'Buisness',
    },
    {
      name: 'Buisness Buisness Buisness',
    },
    {
      name: 'Bns',
    },
  ];
  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div className="tag-item">
        <span className="text"> Enter some tags :</span>
      </div>
      <div ref={connect} className={cn(className, classNames)}>
        {tags.map((Tag, index) => (
          <div style={tagsCss} key={index}>
            {Tag.name}
          </div>
        ))}
      </div>
      <input type="text" placeholder="Type somthing" />
    </div>
  );
};
export default InputTags;