const myname = "name"

function print(str) {
    alert(str)
    console.log(str)
}

function saymyname() {
    print("Меня зовут " + myname)
}

function mathwork() {
    var a = 4 + 2 - 1
    var b = Math.sqrt(16)
    var c = 3 * 6
    var d = 2 / 9
    
    print("A = " + a)
    print("B = " + b)
    print("C = " + c)
    print("D = " + d)
}

function work31() {
    var nums = [4, 4, 4, 4, 4, 4, 4, 8]
    var sum = nums[0] + nums[1] + nums[2]
    var sum2 = nums[3] + nums[4] + nums[5]

    if (sum == sum2) {
        print("Да")
    }
    else {
        print("Нет")
    }
}

function work32() {
    var month_num = 3
    var month_res;

    switch (month_num) {
        case 1:
            month_res = "Январь"
            print(month_res)
            break
        case 2:
            month_res = "Февраль"
            print(month_res)
            break
        case 3:
            month_res = "Март"
            print(month_res)
            break
        case 4:
            month_res = "Апрель"
            print(month_res)
            break
        case 5:
            month_res = "Май"
            print(month_res)
            break
        case 6:
            month_res = "Июнь"
            print(month_res)
            break
        case 7:
            month_res = "Июль"
            print(month_res)
            break
        case 8:
            month_res = "Август"
            print(month_res)
            break
        case 9:
            month_res = "Сентябрь"
            print(month_res)
            break
        case 10:
            month_res = "Октябрь"
            print(month_res)
            break
        case 11:
            month_res = "Ноябрь"
            print(month_res)
            break
        case 12:
            month_res = "Декабрь"
            print(month_res)
            break
        default:
            print("Такого месяца нет")
            break
    }
}

function work4() {
    for (var i = -1; i <= 5; i++) {
        print(i)
    }
}

const arr = [1, 2, 3, 4, 5]

function work5() {
    for (var i = 0; i < arr.length; i++) {
        print(arr[i])
    }
}