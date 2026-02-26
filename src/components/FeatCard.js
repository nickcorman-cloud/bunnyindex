'use client';
import { useState } from 'react';
import Link from 'next/link';
import { buyLabel } from '@/lib/constants';

export default function FeatCard({ product }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <div style={{background:'var(--white)',borderRadius:'var(--r-md)',border:'1px solid var(--border)',overflow:'hidden'}}>
      <div style={{aspectRatio:'1/1',background:'var(--parchment)',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
        {product.imageUrl && !imgErr
          ? <img src={product.imageUrl} alt={product.name} style={{width:'100%',height:'100%',objectFit:'cover'}} onError={() => setImgErr(true)} referrerPolicy="no-referrer" />
          : <div style={{textAlign:'center',padding:16}}>
              <div style={{fontSize:32,marginBottom:8}}>ð°</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:'var(--muted)'}}>{product.brand}</div>
            </div>
        }
      </div>
      <div style={{padding:'14px 16px 16px'}}>
        <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--terra)',marginBottom:4}}>{product.brand}</div>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:600,color:'var(--ink)',lineHeight:1.2,marginBottom:12}}>{product.name}</div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <span style={{fontSize:14,fontWeight:500,color:'var(--ink)'}}>${product.price}</span>
          <a href={product.buyUrl} target="_blank" rel="noopener noreferrer"
            style={{fontSize:11,color:'var(--terra)',fontWeight:600,textDecoration:'none',border:'1px solid var(--terra)',borderRadius:20,padding:'3px 8px'}}>
            {buyLabel(product.buyUrl)}
          </a>
        </div>
      </div>
    </div>
  );
}
