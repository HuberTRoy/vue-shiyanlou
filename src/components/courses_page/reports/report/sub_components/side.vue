<template>
    <div class="report_side_div">
        <!-- 
            布局：
            两块card
            一块er是报告作者数据
            一块er是
         -->
         <!-- <div class="reprot_side_layout"> -->
             <div class="report_side_block">
                <p class="report_side_header">实验报告</p>
                <div class="report_side_learn_data">
                    <span>数据1key</span>
                    <span>数据1value</span>
                </div>
             </div>
             <div class="report_side_block">
                 <p class="report_side_header">实验报告</p>
                 <div class="report_side_related_report">
                     报告1111111111111111111111111111111111111111111111111111111
                 </div>
             </div>
         <!-- </div> -->
    </div>
</template>
<script type="text/javascript">
    
</script>
<style type="text/css">
.report_side_div {
    width: 25%;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
}

/*.reprot_side_layout {
    background: #fff;
}
*/
.report_side_block {
    background: #fff;
    margin-bottom: 30px;
    padding: 15px;
    display: flex;
    flex-direction: column;
}

.report_side_header {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.report_side_related_report {
    padding: 12px;
    word-wrap: break-word;
    color: #4c5157;
    cursor: pointer;
}

.report_side_related_report:hover {
    background: #f9f9f9;
}
</style>
