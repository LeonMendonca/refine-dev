import React from 'react';
import { Card } from 'antd';

const centerText: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: 0,
    fontWeight: 'bolder',
    fontSize: 16
}

const CardComponent = ({ cardCount, cardContent, bgColor, textColor }: { cardCount: number; cardContent: string, bgColor: string, textColor: string }) => (
  <Card variant="borderless" style={{ width: 300, background: bgColor, color: textColor }}>
    <p style={{...centerText, fontSize: 40}}>{cardCount}</p>
    <p style={centerText}>{cardContent}</p>
  </Card>
);

export default CardComponent;