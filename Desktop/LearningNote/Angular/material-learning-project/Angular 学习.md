Angular 

# 井号
<input class="search-input" #newArtist
(keyup.enter) = "addArtist(newArtist.value); newArtist.value=''"
>
这里在css中创建了element的对象，井号就是这个对象的标识。