function toc_temp(l){var e=0,i=1;return`<div id='toc-post' class="d-inline-block px-3 py-2 my-3 bg_light rounded"><input id="toc-toggle" class="d-none" autocomplete="off" type="checkbox"/><label for="toc-toggle" id="toc-toggler" class="toc-toggler d-flex align-items-center"><span class="fw-light pe-3">Daftar Isi</span><span class="dropdown-toggle ms-auto"></span></label>${l.map((function(t,s){var a=t.level,o="";if(0==s)o+='<ul class="ps-3 pt-3 d-block d-none-check fs-7">';else if(e<a)o+='<ul class="ps-3 pt-2 fs-8"><li>',i++;else if(e>a&&i>1){for(var r=0;r<e-a;r++)o+="</li></ul>";i--}if(e=a,o+=s>0?"</li>":"",o+='<li class="mb-2">',o+='<a class="text-reset" href="#'+t.id+'">'+t.title+"</a>",s==l.length-1)for(var d=1;d<e;d++)o+="</li></ul>";return o})).join("").replace(/<li>\s*<\/li>/gi,"")}</div>`};function related_inline_temp(l){return`<div class='px-3 py-2 mb-4 border border-3 border-light rounded'>${l.title?`<div class='fw-light pb-3'><span>${l.title}</span></div>`:""}<ul class='ps-3 fw-bold'>${l.posts.map((function(l,e){return`<li class='mb-2'><a href='${l.url}'>${l.title}</a></li>`})).join("")}</ul></div>`};function related_temp(i){return(i.title?"<div class='widget-title position-relative  mb-3 text-uppercase fw-light'><span>"+i.title+"</span></div>":"")+"<div class='row row-cols-sm-2'>"+i.posts.map(function(i){return"<article class='mb-4'><div class='h-100 position-relative bg-archive'>"+(i.img?"<div class='item-thumbnail'><a class='bg_light d-block ratio ratio-21x9 overflow-hidden rounded' href='"+i.url+"'><img alt='"+i.title+"' class='object-cover lazy-"+i.grup_id+" lazyload' data-src='"+i.img+"' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>":"")+"<div class='item-content p-2'><h5 class='item-title fs-6 mb-2' itemprop='headline'><a class='text-reset' href='"+i.url+"'>"+i.title+"</a></h5></div></div></article>"}).join("")+"</div>"};function sidebar_temp(l){return(l.title?"<div class='widget-title position-relative fs-6 mb-3'><span>"+l.title+"</span></div>":"")+"<div class='mb-4'>"+l.posts.map((function(l,e){return"<div class='item-post d-flex mb-3'>"+(l.img?"<div class='item-thumbnail me-4 align-self-center col-3' style='width:65px'><a class='rounded bg_light overflow-hidden d-block ratio ratio-4x3' href='"+l.url+"'><img alt='"+l.title+"' class='object-cover lazy-"+l.grup_id+" lazyload' data-src='"+l.img+"' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>":"")+"<div class='item-content col'><h5 class='item-title fs-7 mb-2' itemprop='headline'><a class='text-reset' href='"+l.url+"'>"+l.title+"</a></h5><div class='item-meta text-secondary d-flex flex-wrap fs-8'><small class='me-2'><svg aria-hidden='true' class='me-1 icon'><use xlink:href='#i-clock'/></svg>"+l.date+"</small></div></div></div>"})).join("")+"</div>"}