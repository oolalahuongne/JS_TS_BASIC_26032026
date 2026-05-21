//Bai 1


function taoPayloadDangNhap(formInput, options) {
    let {username, password, role, rememberMe, device} = formInput; //dùng let để thay đổi thông tin
    const {defaultRole = "guest", allowedRoles,  minPasswordLength = 8} = options;//destructuring và tạo default
    const errors = [];

    username = username.trim().toLowerCase();
    password = password.trim();
    role = role.trim().toLowerCase();
    device = device.trim();
    if (rememberMe === true || rememberMe === "yes" || rememberMe === "on") {
        rememberMe = true 
    } else {rememberMe = false}

    if (role === "") {
        role = defaultRole.toLowerCase();
    }

    const payload = {
        username,
        password,
        role,
        rememberMe,
        device
    }

    if (payload.username === "") {
        errors.push("username không được bỏ trống");
    }
    if (payload.username.includes(" ")) {
        errors.push("username không được có khoảng trắng ỡ giữa");
    }
    if (payload.password.length < minPasswordLength) {
        errors.push(`password phải có ít nhất ${minPasswordLength}`);
    }
    if (!allowedRoles.includes(payload.role)) {
        errors.push("role không được phép");
    }

    return {
        payload,
        errors,
        isValid: errors.length === 0,
    }
}

const loginOptions = {
    defaultRole: "guest",
    allowedRoles: ["admin", "tester", "viewer", "guest"],
    minPasswordLength: 8
};

const loginTestData = [
    {
        name: "Case 1 - Hợp lệ cơ bản",
        formInput: {
            username: "  Neko_Admin  ",
            password: "  12345678  ",
            role: " tester ",
            rememberMe: "yes",
            device: "  chrome-win11  "
        }
    },
    {
        name: "Case 2 - Role rỗng, phải dùng defaultRole",
        formInput: {
            username: "  guest_user  ",
            password: "  abcdefgh  ",
            role: "   ",
            rememberMe: "no",
            device: " firefox "
        }
    },
    {
        name: "Case 3 - Username rỗng",
        formInput: {
            username: "    ",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 4 - Username có khoảng trắng ở giữa",
        formInput: {
            username: "neko admin",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 5 - Password quá ngắn",
        formInput: {
            username: "valid_user",
            password: "123",
            role: "tester",
            rememberMe: true,
            device: "chrome"
        }
    },
    {
        name: "Case 6 - Role không hợp lệ",
        formInput: {
            username: "valid_user",
            password: "12345678",
            role: "manager",
            rememberMe: "on",
            device: "chrome"
        }
    },
    {
        name: "Case 7 - rememberMe là boolean true",
        formInput: {
            username: "admin01",
            password: "abcdefgh",
            role: "admin",
            rememberMe: true,
            device: "edge"
        }
    },
    {
        name: "Case 8 - rememberMe là chuỗi lạ",
        formInput: {
            username: "viewer01",
            password: "abcdefgh",
            role: "viewer",
            rememberMe: "maybe",
            device: "safari"
        }
    }
];

for (let i = 0; i < loginTestData.length; i++) {
    console.log(loginTestData[i].name);
    console.log(taoPayloadDangNhap(loginTestData[i].formInput, loginOptions));
}
