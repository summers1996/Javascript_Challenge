show(data);
d3.select('button').on('click',handleClick);

function show(data) {

    d3.select('tbody').html('')
    
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');

        Object.values(obj).forEach(val=>{
            row.append('td').text(val)
        })
    });
};

function handleClick() {
    var sel = d3.select('input').property('value');
    var filter = data.filter(obj=>obj.datetime==sel);
    show(filter);
}