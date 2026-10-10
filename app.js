(() => {
'use strict';
const params = new URLSearchParams(location.search);
const uid = params.get('uid');
const validUid = typeof uid === 'string' && /^[A-Za-z0-9_-]{1,128}$/.test(uid);
const lineUrl = 'https://line.me/R/oaMessage/%40701coecn/';
const dialog = document.getElementById('line-guide');
document.querySelectorAll('.line-return').forEach(a => a.href=lineUrl);
document.querySelectorAll('.application-link').forEach(a=>{
  if(validUid){const url=new URL('https://q6501htp.autosns.app/fm/NbOXdEWy0f');url.searchParams.set('uid',uid);a.href=url.href;a.rel='noreferrer';}
  else{a.href=lineUrl;a.addEventListener('click',e=>{if(dialog.showModal){e.preventDefault();dialog.showModal();}});}
});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
const videoUrl='https://videos.pexels.com/video-files/31387241/13393574_1920_1080_30fps.mp4';
const scenes={
 a:{title:'LINE登録と同時に、初回の特典を。',description:'おーぶでは、登録直後にあいさつと餃子または唐揚げの特典をご案内しています。登録と初回特典を、ひとつの流れとして設計します。',date:'LINE登録直後',message:'麺やaube ～おーぶ～へようこそ。ご登録ありがとうございます。まずは、餃子または唐揚げ一皿の特典をご案内します。ご利用後は、次回の特典もお楽しみください。',coupon:'A',couponTitle:'餃子 or 唐揚げ一皿',expiry:'有効期限はクーポン画面で確認',next:'used',image:'assets/aube-initial-coupon.png'},
 b:{title:'初回特典を使ったら、次は選べる丼。',description:'初回クーポンの利用後は、翌日10時に選べる丼メニューの特典を配信。初回のご案内を止めて、2回目の来店へつなげます。',date:'初回クーポン利用・翌日10:00',message:'先日はご来店ありがとうございました。次回のご来店に、選べる丼メニューを1つプレゼント。お好みの丼をお楽しみください。',coupon:'B',couponTitle:'選べる丼メニュー1つ',expiry:'有効期限はクーポン画面で確認',next:'used',image:'assets/aube-don-banner.png'},
 remind:{title:'感謝の気持ちを、リマインドで。',description:'丼クーポンの配信段階では、シナリオ登録16日後のご案内を設定。特典だけでなく、お店を思い出すきっかけを届けます。',date:'丼クーポンのご案内・16日後の例',message:'先日はご来店いただき、ありがとうございました。選べる丼の特典は、まだご利用いただけます。またお会いできたら嬉しいです。ご都合の合うときに、ぜひお立ち寄りください。',coupon:'B',couponTitle:'選べる丼メニュー1つ',expiry:'有効期限はクーポン画面で確認',next:'used',video:true,image:'assets/aube-don-banner.png'},
 last:{title:'期限が近づいたら、最後のご案内。',description:'丼クーポンの段階では24日後のご案内を設定。期限内の利用で次の特典へ進むことを伝えます。配信タイミングは店舗ごとに設計します。',date:'丼クーポンの最終ご案内・24日後の例',message:'選べる丼の特典をご利用いただける期限が近づいています。この特典のご案内は今回が最後です。次の特典へ進むには、期限内のご利用が必要です。',coupon:'B',couponTitle:'選べる丼メニュー1つ',expiry:'有効期限はクーポン画面で確認',next:'used',image:'assets/aube-don-banner.png'},
 used:{title:'利用後は、お礼と次の特典の予告。',description:'クーポンの利用後は前のご案内を止め、次回特典を翌日10時に配信。店舗の完了ページも「明日配信予定」とご案内しています。',date:'クーポンご利用後',message:'ご利用いただき、ありがとうございます。次回使えるお得なクーポンを明日配信予定です。次のご来店も、心よりお待ちしております。',banner:true},
 c:{title:'丼の次は、お好きなラーメン半額。',description:'丼クーポンの利用後は、翌日10時にラーメン半額の特典へ。2回目から3回目の来店へ、特典をつなげる設計です。',date:'丼クーポン利用・翌日10:00',message:'いつもご来店ありがとうございます。今回は、お好きなラーメンを半額で楽しめる特典をご案内します。ご利用後は、リピーター様限定の特典へ進みます。',coupon:'C',couponTitle:'お好きなラーメン半額',expiry:'有効期限はクーポン画面で確認',next:'used',image:'assets/aube-ramen-banner.png'},
 loop:{title:'その先も、常連様の特典が続く。',description:'ラーメン半額の利用後は、翌日10時に麺大盛りまたは煮卵の特典へ。利用後に同じ特典を再配信する仕組みです。',date:'常連様の特典・翌日10:00',message:'いつも麺やaube ～おーぶ～をご利用いただき、ありがとうございます。リピーター様限定で、麺大盛りまたは煮卵の特典をご用意しました。今後もご来店をお待ちしております。',coupon:'無限',couponTitle:'麺大盛り or 煮卵',expiry:'継続条件・期限は店舗ごとに設定',next:'used',image:'assets/aube-loop-banner.png'}
};

const reminderData={
 b:{firstDay:16,lastDay:24,firstMessage:'🍜麺や aubeより大切なお知らせ🍜\n\nお客様、こんにちは✨\n先日お渡しした丼メニュープレゼントクーポン、まだご利用いただけていないようです😊\n\n有効期限はクーポン画面でご確認ください。\n\n✨丼メニュー１つプレゼント✨\n・炙りチャーシュー丼\n・唐揚げ丼\n・至高の煮卵丼\n\n期限内にご利用いただくと、次の特典へ。ご来店を心よりお待ちしております。\n※他券併用不可',lastMessage:'⚠️クーポンの期限まで残り7日⚠️\n※これ以降リマインドは届きません。\n\n先日お渡しした丼メニュープレゼントクーポンの有効期限が近づいています⏰\n\n✨丼メニュー１つプレゼント✨\n・炙りチャーシュー丼\n・唐揚げ丼\n・至高の煮卵丼\n\n期限内にご利用いただくと、次はラーメン半額の特典をご案内します。\n\n※1枚につきお一人まで\n※他券併用不可'},
 c:{firstDay:15,lastDay:23,firstMessage:'🍜麺や aubeよりクーポンのご案内🍜\n\n先日お届けした「お好きなラーメン半額」のクーポンは、まだご利用いただけます。\n\nご利用の期限をクーポン画面で確認して、ぜひお立ち寄りください。\n期限内のご利用で、次は「麺大盛りまたは煮卵」の特典へ進みます。',lastMessage:"⚠️2回目来店者様へ重要なお知らせ⚠️\n\nお客様、こんにちは✨\n先日は2回目のご来店、誠にありがとうございました。\n\n2回目来店者様限定のラーメン半額クーポンを発券しています。クーポンの期限が近づいているので、ぜひご活用ください😊\n\n🎉ラーメン半額クーポン🎉\n\nこれ以降、リマインドは届きません。このメッセージが最後のお知らせです。\n有効期限はクーポン画面でご確認ください。\n\n期限内のご利用で、次回の「麺大盛り or 煮卵」の特典へ進みます。\n\n※1枚につきお一人まで\n※他券併用不可"},
 loop:{firstDay:16,lastDay:24,firstMessage:"🍜常連さんへ大切なお知らせ🍜\n\nお客様、こんにちは✨\nいつもご来店ありがとうございます。\n\nプレミアムクーポン（麺大盛り or 煮卵プレゼント）、まだ使われていないみたいです😊\n有効期限はクーポン画面でご確認ください。\n\n👑常連さん限定プレミアムクーポン👑\n✨麺大盛り or 煮卵プレゼント✨\n\n期限内にご利用いただくと、翌日10時に同じ特典が届きます。\n・ガッツリ食べたい時は麺大盛り\n・トッピングを追加したい時は煮卵\n\nご来店を心よりお待ちしております。\n※1枚につきお一人まで\n※他券併用不可",lastMessage:"⚠️常連さんへ重要なお知らせ⚠️\n\nいつもご来店ありがとうございます✨\n\n常連さん限定プレミアムクーポン（麺大盛り or 煮卵プレゼント）の期限が、あと7日に迫っています。\n\nこのクーポンを期限内に使えば、翌日10時にまた同じプレミアムクーポンが届きます。\n\n期限を過ぎると、今回のクーポンと次の特典への配信は終了します。ぜひ期限内にご利用ください。\n\n※1枚につきお一人まで\n※他券併用不可"}
};
scenes.a.expiry='LINE登録から1時間（おーぶのクーポン本体設定）';
scenes.b.expiry='この特典の配信から30日後 21:30まで';
scenes.c.expiry='この特典の配信から30日後 21:30まで';
scenes.loop.expiry='この特典の配信から30日後 21:30まで';
scenes.used.message='クーポンご使用ありがとうございます。\n本日はご来店いただき誠にありがとうございます。\n\n次回使えるお得なクーポンを明日配信予定です！\nまたのご来店をスタッフ一同お待ちしております。';
const chat=document.getElementById('demo-chat');
const choices=[...document.querySelectorAll('[data-scene]')];
const stageSelect=document.getElementById('demo-stage');
const timing=document.getElementById('demo-timing');
const play=document.getElementById('demo-play');
let timer=null,current='a',usedFrom='a',selectedStage='b';
const sequence=[{key:'a'},{key:'used',from:'a'},{key:'b',stage:'b'},{key:'remind',stage:'b'},{key:'last',stage:'b'},{key:'used',from:'b'},{key:'c',stage:'c'},{key:'remind',stage:'c'},{key:'last',stage:'c'},{key:'used',from:'c'},{key:'loop',stage:'loop'},{key:'remind',stage:'loop'},{key:'last',stage:'loop'},{key:'used',from:'loop'},{key:'loop',stage:'loop'}];
let sequenceIndex=0;
function node(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text)el.textContent=text;return el;}
function stop(){if(timer)clearTimeout(timer);timer=null;play.textContent='順番に見る';play.setAttribute('aria-pressed','false');}
function sceneFor(key,stage=selectedStage){
 if(key!=='remind'&&key!=='last')return scenes[key];
 const base=scenes[stage],config=reminderData[stage],last=key==='last',day=last?config.lastDay:config.firstDay;
 const elapsed=day-1,remaining=30-elapsed;
 const notice='クーポンをお届けしてから'+elapsed+'日が経ちました。\n有効期限まで、あと'+remaining+'日11時間30分です。\n利用期限は、この特典の配信から30日後の21:30です。\n\n';
 return {...base,title:last?base.couponTitle+'：期限まであと'+remaining+'日。':base.couponTitle+'：配信から'+(day-1)+'日が経ちました。',description:'前のクーポン利用から'+day+'日後の午前10時に配信。特典が届いた日（利用翌日）から数えると'+(day-1)+'日後です。有効期限は特典配信から30日後の21:30。この通知時点の残り時間は'+remaining+'日11時間30分です。'+(last?'期限内の利用が次の特典につながることを案内します。':'未利用のお客様に、特典とお店を思い出してもらいます。'),date:'特典配信から'+(day-1)+'日後・10:00',message:notice+(last?config.lastMessage:config.firstMessage),video:!last};
}
function appendMessage(parent,message){const row=node('div','chat-row');const avatar=node('img','chat-avatar');avatar.src='assets/icons/shop.svg';avatar.alt='';row.append(avatar,node('p','chat-bubble',message));parent.append(row);parent.append(node('small','chat-delivery-time','10:00'));}
function appendBanner(parent,scene){const button=node('button','coupon-banner-button');button.type='button';button.setAttribute('aria-label',scene.couponTitle+'のクーポン画面の見本を見る');const img=node('img','');img.width=1620;img.height=1620;img.src=scene.image;img.alt='おーぶの'+scene.couponTitle+'の特典画像';button.append(img);parent.append(button);button.addEventListener('click',()=>{stop();openCoupon(scene);});}
function updateTiming(key){const config=reminderData[selectedStage];timing.replaceChildren();[['特典が届く','利用翌日 10:00','delivery'],['経過日のお知らせ','配信から'+(config.firstDay-1)+'日後 10:00','remind'],['期限前の案内','配信から'+(config.lastDay-1)+'日後 10:00','last']].forEach(([label,date,id])=>{const li=node('li',key===id?'active':'');li.append(node('strong','',label),node('span','',date));timing.append(li);});}
function render(key){
 current=key;
 if(['b','c','loop'].includes(key)){selectedStage=key;stageSelect.value=key;}
 const scene=sceneFor(key);
 document.querySelector('[data-scene="remind"]').lastChild.textContent=(reminderData[selectedStage].firstDay-1)+'日経過';
 document.querySelector('[data-scene="last"]').lastChild.textContent='残り'+(31-reminderData[selectedStage].lastDay)+'日';
 choices.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scene===key||(b.dataset.scene==='b'&&key==='c'))));
 updateTiming(['b','c','loop'].includes(key)?'delivery':key);
 document.getElementById('demo-scene-title').textContent=scene.title;
 document.getElementById('demo-scene-description').textContent=scene.description;
 chat.replaceChildren();let arrival=null;
 if(key==='remind'||key==='last'){
  const history=node('div','chat-history'),base=scenes[selectedStage];
  history.append(node('div','chat-date','前のクーポン利用・翌日10:00'));appendMessage(history,base.message);appendBanner(history,base);
  if(key==='last'){const first=sceneFor('remind');history.append(node('div','chat-date',first.date));appendMessage(history,first.message);}
  chat.append(history);arrival=node('div','chat-unread','このタイミングで、新しいメッセージが届く');chat.append(arrival);
 }
 chat.append(node('div','chat-date',scene.date));appendMessage(chat,scene.message);
 if(scene.video){const media=node('div','chat-video');media.append(node('p','','お店の魅力を伝える動画も。'));const v=node('video','food-video');v.controls=true;v.playsInline=true;v.muted=true;v.preload='none';v.src=videoUrl;v.setAttribute('aria-label','料理のイメージ動画');const fallback=node('a','','料理のイメージ動画を開く');fallback.href=videoUrl;fallback.target='_blank';fallback.rel='noopener';v.append(fallback);media.append(v,node('small','','ストック映像／おーぶの実料理ではありません'));chat.append(media);v.addEventListener('play',stop);}
 if(scene.coupon){appendBanner(chat,scene);chat.append(node('p','coupon-tap-hint','画像をタップしてクーポン画面の見本へ'));}
 if(scene.banner){
  const nextKey=usedFrom==='a'?'b':usedFrom==='b'?'c':'loop';const banner=node('img','chat-banner');banner.src=scenes[nextKey].image;banner.alt='おーぶの次回特典バナー（予告イメージ）';chat.append(node('p','chat-date','次回特典の予告イメージ'),banner);banner.tabIndex=0;banner.setAttribute('role','button');banner.setAttribute('aria-label','翌日10時の次回配信例を見る');const showNext=()=>{stop();render(nextKey);};banner.addEventListener('click',showNext);banner.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();showNext();}});const next=node('button','next-delivery','翌日10時の配信を見る');next.type='button';next.addEventListener('click',showNext);chat.append(next);
 }
 chat.append(node('p','chat-sample-note','実設定をもとに本文を整理した説明用デモです。'));
 chat.scrollTop=0;if(arrival)chat.scrollTop=arrival.getBoundingClientRect().top-chat.getBoundingClientRect().top-12;
}
const demoVisibility=new IntersectionObserver(entries=>{
 document.body.classList.toggle('demo-preview-active',entries[0].isIntersecting);
},{rootMargin:'-68px 0px 0px 0px'});
demoVisibility.observe(document.querySelector('.demo-device-area'));
function keepDemoVisible(){
 document.body.classList.add('demo-preview-active');
 const area=document.querySelector('.demo-device-area');
 const top=area.getBoundingClientRect().top;
 const header=document.querySelector('.site-header').getBoundingClientRect().height;
 const controls=document.querySelector('.demo-device-controls').getBoundingClientRect();
 const bottom=window.innerHeight-document.querySelector('.mobile-cta').getBoundingClientRect().height;
 if(top<header+8||controls.bottom>bottom){window.scrollTo({top:window.scrollY+top-header-8,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});}
}
stageSelect.addEventListener('change',()=>{stop();selectedStage=stageSelect.value;render(current==='remind'||current==='last'?current:selectedStage);keepDemoVisible();});
function openCoupon(scene){
 chat.replaceChildren();
 const back=node('button','coupon-back','トークに戻る');back.type='button';back.addEventListener('click',()=>render(current));chat.append(back);
 const view=node('div','coupon-detail');view.append(node('p','detail-eyebrow','操作デモ / STEP '+scene.coupon),node('h4','',scene.couponTitle));
 const picture=node('img','');picture.src=scene.image;picture.alt=scene.couponTitle+'の特典画像';view.append(picture);
 view.append(node('p','detail-expiry',scene.expiry),node('p','detail-note','店内飲食・他券併用不可。期限内の利用で次の特典へ。表示は説明用サンプルです。'));
 const use=node('button','coupon-use','スタッフが利用済みにする（デモ）');use.type='button';use.addEventListener('click',()=>{usedFrom=scene.coupon==='B'?'b':scene.coupon==='C'?'c':scene.coupon==='無限'?'loop':'a';render('used');});view.append(use,node('small','','この画面では実際のクーポンを利用できません。'));chat.append(view);chat.scrollTop=0;
}
choices.forEach(b=>b.addEventListener('click',()=>{stop();let key=b.dataset.scene;if(key==='b')key=selectedStage;if(key==='used'&&current!=='used')usedFrom=current==='a'?'a':selectedStage;render(key);keepDemoVisible();}));
play.setAttribute('aria-pressed','false');
function tick(){
 sequenceIndex=(sequenceIndex+1)%sequence.length;
 const item=sequence[sequenceIndex];
 if(item.from)usedFrom=item.from;
 if(item.stage){selectedStage=item.stage;stageSelect.value=item.stage;}
 render(item.key);
 timer=setTimeout(tick,5500);
}
play.addEventListener('click',()=>{
 if(timer){stop();return;}
 sequenceIndex=Math.max(0,sequence.findIndex(item=>item.key===current && (!item.stage||item.stage===selectedStage) && (current!=='used'||item.from===usedFrom)));
 play.textContent='一時停止';play.setAttribute('aria-pressed','true');
 timer=setTimeout(tick,5500);
});
document.getElementById('demo-reset').addEventListener('click',()=>{stop();usedFrom='a';selectedStage='b';stageSelect.value='b';render('a');keepDemoVisible();});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
const credit=document.getElementById('demo-video-credit');credit.hidden=false;
const source=node('a','','料理映像：Ali Alcántara / Pexels');source.href='https://www.pexels.com/video/delicious-japanese-ramen-noodles-close-up-31387241/';source.target='_blank';source.rel='noopener';credit.append(source);
render('a');
})();
