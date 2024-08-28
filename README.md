<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>งานระยะไกลในไทย - หางานทำจากที่บ้านหรือทั่วประเทศ</title>
    <style>
        body {
            font-family: 'Sarabun', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #00a86b;
            color: #fff;
            text-align: center;
            padding: 1rem;
        }
        nav {
            background-color: #008255;
            color: #fff;
            padding: 0.5rem;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            justify-content: center;
        }
        nav ul li {
            margin: 0 15px;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
        }
        main {
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .search-box {
            text-align: center;
            margin-bottom: 20px;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .search-box input[type="text"] {
            width: 60%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .search-box select {
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-right: 10px;
        }
        .search-box button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #00a86b;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .job-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        .job-card {
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .job-card h3 {
            color: #00a86b;
            margin-top: 0;
        }
        .tag {
            display: inline-block;
            background-color: #e0f2e9;
            color: #00a86b;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.9em;
            margin-right: 5px;
        }
        footer {
            background-color: #008255;
            color: #fff;
            text-align: center;
            padding: 1rem;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>งานระยะไกลในไทย</h1>
        <p>หางานทำจากที่บ้านหรือทั่วประเทศไทย</p>
    </header>
    <nav>
        <ul>
            <li><a href="#">หน้าแรก</a></li>
            <li><a href="#">ค้นหางาน</a></li>
            <li><a href="#">เคล็ดลับการทำงานระยะไกล</a></li>
            <li><a href="#">อัพโหลดเรซูเม่</a></li>
            <li><a href="#">ติดต่อเรา</a></li>
        </ul>
    </nav>
    <main>
        <section class="search-box">
            <input type="text" placeholder="ค้นหาตำแหน่งงานหรือทักษะ">
            <select>
                <option value="">ทุกประเภท</option>
                <option value="full-time">เต็มเวลา</option>
                <option value="part-time">พาร์ทไทม์</option>
                <option value="contract">สัญญาจ้าง</option>
            </select>
            <button>ค้นหา</button>
        </section>
        <section class="job-list">
            <div class="job-card">
                <h3>นักพัฒนาเว็บไซต์ Full Stack</h3>
                <p><strong>บริษัท:</strong> เทคโนโลยี อินโนเวชั่น จำกัด</p>
                <p><strong>รูปแบบงาน:</strong> ทำงานจากที่บ้าน 100%</p>
                <p><strong>เงินเดือน:</strong> 50,000 - 80,000 บาท</p>
                <div>
                    <span class="tag">React</span>
                    <span class="tag">Node.js</span>
                    <span class="tag">MongoDB</span>
                </div>
            </div>
            <div class="job-card">
                <h3>นักการตลาดดิจิทัล</h3>
                <p><strong>บริษัท:</strong> ดิจิตอล มาร์เก็ตติ้ง โปร</p>
                <p><strong>รูปแบบงาน:</strong> ทำงานจากที่บ้าน และออฟฟิศบางวัน</p>
                <p><strong>เงินเดือน:</strong> 35,000 - 55,000 บาท</p>
                <div>
                    <span class="tag">SEO</span>
                    <span class="tag">Google Ads</span>
                    <span class="tag">Content Marketing</span>
                </div>
            </div>
            <div class="job-card">
                <h3>นักแปลภาษาอังกฤษ-ไทย</h3>
                <p><strong>บริษัท:</strong> ทรานส์เลชั่น เอ็กซ์เพิร์ต</p>
                <p><strong>รูปแบบงาน:</strong> งานอิสระ (Freelance)</p>
                <p><strong>ค่าตอบแทน:</strong> ตามปริมาณงาน</p>
                <div>
                    <span class="tag">การแปล</span>
                    <span class="tag">ภาษาอังกฤษ</span>
                    <span class="tag">ภาษาไทย</span>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 งานระยะไกลในไทย. สงวนลิขสิทธิ์.</p>
    </footer>
</body>
</html>
