<template>
    <div class="main_profile_code_div">
        <div class="main_profile_code_layout_div">
            <input type="text" name="code_input" class="main_profile_code_input form-control" placeholder="输入兑换码">
            <button class="main_profile_code_button">立即兑换</button>
        </div>
    </div>
</template>
<script type="text/javascript">
    
</script>
<style type="text/css" scoped>
.main_profile_code_layout_div {
    display: flex;
    padding: 0 15px;
}

.main_profile_code_button {
    padding: .375rem .5rem;
    color: #fff;
    background: #08bf91;
    border: 1px solid #08bf91;
    /*opacity: .65;*/
    width: 100px;
    font-size: 1rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.main_profile_code_button:hover {
    background: #069a75;
}

.main_profile_code_input {
    width: 218px;
    margin-right: 10px;
}
</style>
