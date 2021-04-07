show(data);
d3.selectAll('input').on('change',handleChange);
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

var filterData = data;

function handleClick() {
    d3.selectAll('input').property('value','');
    filterData = data;
    show(filterData);
};

function handleChange() {
    var key = d3.select(this).property('id');
    var val = d3.select(this).property('value');

    filterData = filterData.filter(obj=>obj[key]==val);

    show(filterData)
}